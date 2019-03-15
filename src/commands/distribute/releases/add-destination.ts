import { AppCommand, CommandResult, ErrorCodes, failure, help, success, shortName, longName, required, hasArg, defaultValue } from "../../../util/commandline";
import { AppCenterClient, models, clientRequest, ClientResponse } from "../../../util/apis";
import { out } from "../../../util/interaction";
import { inspect } from "util";
import * as _ from "lodash";
import { DefaultApp } from "../../../util/profile";

const debug = require("debug")("appcenter-cli:commands:distribute:releases:add-destination");

type DestinationType = "group" | "tester";

const ValidDestinationTypes = ["group", "tester"];

@help("Adds a new destination to an existing release")
export default class AddDestinationCommand extends AppCommand {

  @help("Release ID")
  @shortName("r")
  @longName("release-id")
  @required
  @hasArg
  public releaseId: string;

  @help("Destination Type: group or tester")
  @shortName("t")
  @longName("type")
  @required
  @hasArg
  public destinationType: string;

  @help("Destination: The name of the group or the email of a tester")
  @shortName("d")
  @longName("destination")
  @required
  @hasArg
  public destination: string;

  @help("Mandatory")
  @shortName("m")
  @longName("mandatory")
  public mandatory: boolean;

  @help("Silent")
  @shortName("s")
  @longName("silent")
  public silent: boolean;

  public async run(client: AppCenterClient): Promise<CommandResult> {
    const app: DefaultApp = this.app;

    const releaseId = Number(this.releaseId);
    if (!Number.isSafeInteger(releaseId) || releaseId <= 0) {
      return failure(ErrorCodes.InvalidParameter, `${this.releaseId} is not a valid release id`);
    }

    if (ValidDestinationTypes.indexOf(this.destinationType) === -1) {
      return failure(ErrorCodes.InvalidParameter, `${this.destinationType} is not a valid destination type. Available types are: ${ValidDestinationTypes.join(", ")}`);
    }
    const destinationType = this.destinationType as DestinationType;

    let distributionGroupId: string;
    if (destinationType === "group") {
      try {
        debug("Getting group details");
        const group = await out.progress(`Loading group details...`,
          clientRequest<models.DistributionGroupResponse>(async (cb) => client.distributionGroups.get(app.ownerName, app.appName, this.destination, cb)));

        if (group.response.statusCode >= 400) {
          throw { statusCode: group.response.statusCode };
        }

        if (!group.result) {
          throw { statusCode: 404 };
        }

        distributionGroupId = group.result.id;
      } catch (error) {
        if (error.statusCode === 404) {
          throw failure(ErrorCodes.InvalidParameter, `distribution group "${this.destination}" was not found`);
        } else {
          debug(`Failed to get distribution group - ${inspect(error)}`);
          throw failure(ErrorCodes.Exception, `failed to get distribution group "${this.destination}"`);
        }
      }
    }

    debug("Distributing the release");
    await this.reDistributeGroup(
      client,
      app,
      releaseId,
      destinationType,
      destinationType === "group" ? distributionGroupId : this.destination,
      this.mandatory,
      !this.silent
    );

    out.text(`Release ${this.releaseId} was distributed to ${this.destinationType} "${this.destination}"`);
    return success();
  }

  private async reDistributeGroup(client: AppCenterClient, app: DefaultApp, releaseId: number, destinationType: DestinationType, destination: string, mandatoryUpdate: boolean = false, notifyTesters: boolean = true): Promise<models.ReleaseDetailsResponse> {
    let updateReleaseRequestResponse: ClientResponse<models.ReleaseDetailsResponse>;
    try {
      if (destinationType === "group") {
        updateReleaseRequestResponse = await out.progress(`Distributing the release...`,
          clientRequest<models.ReleaseDetailsResponse>(async (cb) => client.releases.addDistributionGroup(releaseId, app.ownerName, app.appName, destination, {
            mandatoryUpdate,
            notifyTesters,
          }, cb)));
      } else {
        updateReleaseRequestResponse = await out.progress(`Distributing the release...`,
          clientRequest<models.ReleaseDetailsResponse>(async (cb) => client.releases.addTesters(releaseId, app.ownerName, app.appName, destination, {
            mandatoryUpdate,
            notifyTesters,
          }, cb)));
      }
      const statusCode = updateReleaseRequestResponse.response.statusCode;
      if (statusCode >= 400) {
        throw { statusCode };
      }
    } catch (error) {
      if (error.statusCode === 404) {
        throw failure(ErrorCodes.InvalidParameter, `release "${this.releaseId}" was not found`);
      } else {
        debug(`Failed to distribute the release - ${inspect(error)}`);
        throw failure(ErrorCodes.Exception, `failed to set ${this.destinationType} "${this.destination}" for release ${releaseId}`);
      }
    }

    return updateReleaseRequestResponse.result;
  }
}
