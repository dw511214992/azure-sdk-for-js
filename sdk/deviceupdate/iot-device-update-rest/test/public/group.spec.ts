// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { Recorder } from "@azure-tools/test-recorder";
import { DeviceUpdateRestClient } from "../../src";
import { createClient, createRecorder } from "./utils/recordedClient";
import { Context } from "mocha";
import { assert } from "chai";

describe("group test", () => {
  let recorder: Recorder;
  let client: DeviceUpdateRestClient;

  beforeEach(function (this: Context) {
    recorder = createRecorder(this);
    client = createClient();
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("list groups", async function() {
    const result = await client.path("/deviceupdate/{instanceId}/management/groups", "sdkinstance").get();
    if (result.status !== "200") {
      assert.fail(`GET "/deviceupdate/sdkinstance/management/groups" failed with ${result.status}`);
    }
  });

  it("get group", async function() {
    const result = await client.path("/deviceupdate/{instanceId}/management/groups/{groupId}", "sdkinstance", "testgroup").get();
    if (result.status !== "200") {
      assert.fail(`GET "/deviceupdate/sdkinstance/management/groups/testgroup" failed with ${result.status}`);
    }
  });
}).timeout(60000000000);
