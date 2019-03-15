import { expect, use } from "chai";
import * as Nock from "nock";
import * as ChaiAsPromised from "chai-as-promised";
import * as sinon from "sinon";

use(ChaiAsPromised);

import AddDestinationCommand from "../../../../src/commands/distribute/releases/add-destination";
import { CommandArgs, CommandFailedResult, ErrorCodes } from "../../../../src/util/commandline";
import { DistributionGroupResponse } from "../../../../src/util/apis/generated/models";

describe("releases add-destination command", () => {
  /* tslint:disable-next-line:no-http-string */
  const fakeHost = "http://localhost:1700";
  let nockScope: Nock.Scope;

  const fakeAppOwner = "fakeAppOwner";
  const fakeAppName = "fakeAppName";
  const fakeAppIdentifier = `${fakeAppOwner}/${fakeAppName}`;
  const fakeToken = "c1o3d3e7";
  const fakeReleaseId = "1";
  const fakeDistributionGroupName = "fakeDistributionGroupName";
  const fakeDistributionGroupId = "00000000-0000-0000-0000-000000000000";
  const fakeTesterEmail = "test@test.com";

  before(() => {
    Nock.disableNetConnect();
  });

  beforeEach(() => {
    nockScope = Nock(fakeHost);
  });

  afterEach(() => {
    Nock.cleanAll();
  });

  after(() => {
    Nock.enableNetConnect();
  });

  describe("when all needed information is provided", () => {
    return;
  });

  // describe("when everything works as expected", function () {
  //   it("reports the command as succeeded", async () => {
  //     const command = new AddDestinationCommand(getCommandArgs(["--release-id", fakeReleaseId, "--type", "group", "--destination", fakeDistributionGroupName]));
  //     const result = await command.execute();

  //     expect(result.succeeded).to.be.true;
  //   });
  // });

  context("validation", () => {
    describe("when the release id is not a number", () => {
      it("reports the command as failed", async () => {
        const command = new AddDestinationCommand(getCommandArgs(["--release-id", "lol", "--type", "group", "--destination", fakeDistributionGroupName]));
        const result: CommandFailedResult = await command.execute() as CommandFailedResult;

        expect(result.succeeded).to.be.false;
        expect(result.errorCode).to.eql(ErrorCodes.InvalidParameter);
        expect(result.errorMessage).to.eql("lol is not a valid release id");
      });
    });

    describe("when an invalid destination type is provided", () => {
      it("reports the command as failed", async () => {
        const command = new AddDestinationCommand(getCommandArgs(["--release-id", fakeReleaseId, "--type", "not-a-type", "--destination", fakeDistributionGroupName]));
        const result: CommandFailedResult = await command.execute() as CommandFailedResult;

        expect(result.succeeded).to.be.false;
        expect(result.errorCode).to.eql(ErrorCodes.InvalidParameter);
        expect(result.errorMessage).to.eql("not-a-type is not a valid destination type. Available types are: group, tester");
      });
    });
  });

  context("add-destination group", () => {
    describe("when the there is no group with specified name", () => {
      it("reports the command as failed", async () => {
        nockScope
          .get(`/v0.1/apps/${fakeAppOwner}/${fakeAppName}/distribution_groups/${fakeDistributionGroupName}`)
          .reply(404);

        try {
          const command = new AddDestinationCommand(getCommandArgs(["--release-id", fakeReleaseId, "--type", "group", "--destination", fakeDistributionGroupName]));
          await command.execute();
        } catch (e) {
          expect(e.errorCode).to.eql(ErrorCodes.InvalidParameter);
          expect(e.errorMessage).to.eql(`distribution group "${fakeDistributionGroupName}" was not found`);
        }
      });
    });

    describe("when backend failed to return a group", () => {
      it("reports the command as failed", async () => {
        nockScope
          .get(`/v0.1/apps/${fakeAppOwner}/${fakeAppName}/distribution_groups/${fakeDistributionGroupName}`)
          .reply(400);

        try {
          const command = new AddDestinationCommand(getCommandArgs(["--release-id", fakeReleaseId, "--type", "group", "--destination", fakeDistributionGroupName]));
          await command.execute();
        } catch (e) {
          expect(e.errorCode).to.eql(ErrorCodes.Exception);
          expect(e.errorMessage).to.eql(`failed to get distribution group "${fakeDistributionGroupName}"`);
        }
      });
    });

    describe("when group is found but release doesn't exist", () => {
      it("reports the command as failed", async () => {
        nockScope
          .get(`/v0.1/apps/${fakeAppOwner}/${fakeAppName}/distribution_groups/${fakeDistributionGroupName}`)
          .reply(200, {
            id: fakeDistributionGroupId,
            name: fakeDistributionGroupName,
            origin: "appcenter",
            isPublic: false
          } as DistributionGroupResponse);

        nockScope
          .post(`/v0.1/apps/${fakeAppOwner}/${fakeAppName}/releases/${fakeReleaseId}/groups`)
          .reply(404);

        try {
          const command = new AddDestinationCommand(getCommandArgs(["--release-id", fakeReleaseId, "--type", "group", "--destination", fakeDistributionGroupName]));
          await command.execute();
        } catch (e) {
          expect(e.errorCode).to.eql(ErrorCodes.InvalidParameter);
          expect(e.errorMessage).to.eql(`release "${fakeReleaseId}" was not found`);
        }
      });
    });

    describe("when group is found but distribution failed", () => {
      it("reports the command as failed", async () => {
        nockScope
          .get(`/v0.1/apps/${fakeAppOwner}/${fakeAppName}/distribution_groups/${fakeDistributionGroupName}`)
          .reply(200, {
            id: fakeDistributionGroupId,
            name: fakeDistributionGroupName,
            origin: "appcenter",
            isPublic: false
          } as DistributionGroupResponse);

        nockScope
          .post(`/v0.1/apps/${fakeAppOwner}/${fakeAppName}/releases/${fakeReleaseId}/groups`)
          .reply(400);

        try {
          const command = new AddDestinationCommand(getCommandArgs(["--release-id", fakeReleaseId, "--type", "group", "--destination", fakeDistributionGroupName]));
          await command.execute();
        } catch (e) {
          expect(e.errorCode).to.eql(ErrorCodes.Exception);
          expect(e.errorMessage).to.eql(`failed to set group "${fakeDistributionGroupName}" for release ${fakeReleaseId}`);
        }
      });
    });

    describe("when group is found and distribution successful", () => {
      beforeEach(() => {
        nockScope
          .get(`/v0.1/apps/${fakeAppOwner}/${fakeAppName}/distribution_groups/${fakeDistributionGroupName}`)
          .reply(200, {
            id: fakeDistributionGroupId,
            name: fakeDistributionGroupName,
            origin: "appcenter",
            isPublic: false
          } as DistributionGroupResponse);
      });

      it("reports the command as succeeded", async () => {
        nockScope
          .post(`/v0.1/apps/${fakeAppOwner}/${fakeAppName}/releases/${fakeReleaseId}/groups`, {
            id: fakeDistributionGroupId,
            mandatory_update: false,
            notify_testers: true
          })
          .reply(201);

        const command = new AddDestinationCommand(getCommandArgs(["--release-id", fakeReleaseId, "--type", "group", "--destination", fakeDistributionGroupName]));
        await command.execute();
      });

      it("reports the command as succeeded with --mandatory", async () => {
        nockScope
          .post(`/v0.1/apps/${fakeAppOwner}/${fakeAppName}/releases/${fakeReleaseId}/groups`)
          .reply(201, {
            id: fakeDistributionGroupId,
            mandatory_update: true,
            notify_testers: true
          });

        const command = new AddDestinationCommand(getCommandArgs(["--release-id", fakeReleaseId, "--type", "group", "--destination", fakeDistributionGroupName, "--mandatory"]));
        await command.execute();
      });

      it("reports the command as succeeded with --silent", async () => {
        nockScope
          .post(`/v0.1/apps/${fakeAppOwner}/${fakeAppName}/releases/${fakeReleaseId}/groups`)
          .reply(201, {
            id: fakeDistributionGroupId,
            mandatory_update: false,
            notify_testers: false
          });

        const command = new AddDestinationCommand(getCommandArgs(["--release-id", fakeReleaseId, "--type", "group", "--destination", fakeDistributionGroupName, "--silent"]));
        await command.execute();
      });

      it("reports the command as succeeded with --silent and --mandatory", async () => {
        nockScope
          .post(`/v0.1/apps/${fakeAppOwner}/${fakeAppName}/releases/${fakeReleaseId}/groups`)
          .reply(201, {
            id: fakeDistributionGroupId,
            mandatory_update: true,
            notify_testers: true
          });

        const command = new AddDestinationCommand(getCommandArgs(["--release-id", fakeReleaseId, "--type", "group", "--destination", fakeDistributionGroupName, "--mandatory", "--silent"]));
        await command.execute();
      });
    });
  });

  context("add-destination tester", () => {
    describe("when release doesn't exist", () => {
      it("reports the command as failed", async () => {
        nockScope
          .post(`/v0.1/apps/${fakeAppOwner}/${fakeAppName}/releases/${fakeReleaseId}/testers`)
          .reply(404);

        try {
          const command = new AddDestinationCommand(getCommandArgs(["--release-id", fakeReleaseId, "--type", "tester", "--destination", fakeTesterEmail]));
          await command.execute();
        } catch (e) {
          expect(e.errorCode).to.eql(ErrorCodes.InvalidParameter);
          expect(e.errorMessage).to.eql(`release "${fakeReleaseId}" was not found`);
        }
      });
    });

    describe("when distribution failed", () => {
      it("reports the command as failed", async () => {
        nockScope
          .post(`/v0.1/apps/${fakeAppOwner}/${fakeAppName}/releases/${fakeReleaseId}/testers`)
          .reply(400);

        try {
          const command = new AddDestinationCommand(getCommandArgs(["--release-id", fakeReleaseId, "--type", "tester", "--destination", fakeTesterEmail]));
          await command.execute();
        } catch (e) {
          expect(e.errorCode).to.eql(ErrorCodes.Exception);
          expect(e.errorMessage).to.eql(`failed to set tester "${fakeTesterEmail}" for release ${fakeReleaseId}`);
        }
      });
    });

    describe("when distribution successful", () => {
      it("reports the command as succeeded", async () => {
        nockScope
          .post(`/v0.1/apps/${fakeAppOwner}/${fakeAppName}/releases/${fakeReleaseId}/testers`, {
            email: fakeTesterEmail,
            mandatory_update: false,
            notify_testers: true
          })
          .reply(201);

        const command = new AddDestinationCommand(getCommandArgs(["--release-id", fakeReleaseId, "--type", "tester", "--destination", fakeTesterEmail]));
        await command.execute();
      });

      it("reports the command as succeeded with --mandatory", async () => {
        nockScope
          .post(`/v0.1/apps/${fakeAppOwner}/${fakeAppName}/releases/${fakeReleaseId}/testers`)
          .reply(201, {
            email: fakeTesterEmail,
            mandatory_update: true,
            notify_testers: true
          });

        const command = new AddDestinationCommand(getCommandArgs(["--release-id", fakeReleaseId, "--type", "tester", "--destination", fakeTesterEmail, "--mandatory"]));
        await command.execute();
      });

      it("reports the command as succeeded with --silent", async () => {
        nockScope
          .post(`/v0.1/apps/${fakeAppOwner}/${fakeAppName}/releases/${fakeReleaseId}/testers`)
          .reply(201, {
            email: fakeTesterEmail,
            mandatory_update: false,
            notify_testers: false
          });

        const command = new AddDestinationCommand(getCommandArgs(["--release-id", fakeReleaseId, "--type", "tester", "--destination", fakeTesterEmail, "--silent"]));
        await command.execute();
      });

      it("reports the command as succeeded with --silent and --mandatory", async () => {
        nockScope
          .post(`/v0.1/apps/${fakeAppOwner}/${fakeAppName}/releases/${fakeReleaseId}/testers`)
          .reply(201, {
            email: fakeTesterEmail,
            mandatory_update: true,
            notify_testers: false
          });

        const command = new AddDestinationCommand(getCommandArgs(["--release-id", fakeReleaseId, "--type", "tester", "--destination", fakeTesterEmail, "--mandatory", "--silent"]));
        await command.execute();
      });
    });
  });

  function getCommandArgs(additionalArgs: string[]): CommandArgs {
    const args: string[] = ["-a", fakeAppIdentifier, "--token", fakeToken, "--env", "local"].concat(additionalArgs);
    return {
      args,
      command: ["distribute", "releases", "add-destination"],
      commandPath: "FAKE"
    };
  }
});
