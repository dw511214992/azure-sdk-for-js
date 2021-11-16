let nock = require('nock');

module.exports.hash = "ac93451adda6d02e8a6c895bd701122a";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://https%3A%2F%2Fendpoint', {"encodedQueryParams":true})
  .get('/deviceupdate/sdkinstance/management/groups/testgroup')
  .query(true)
  .reply(200, {"deploymentId":"test2021111624739","groupId":"testgroup","tags":["testgroup"],"createdDateTime":"2021-11-16T00:49:25.141+00:00","groupType":"DeviceClassIdAndIoTHubTag","deviceCount":2,"deviceClassId":"0919e3ae422a2bfa8c84ff905813e60351e456d1"}, [
  'Date',
  'Tue, 16 Nov 2021 06:06:23 GMT',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '291',
  'traceparent',
  '00-364f04b8df1c274e99b0998ae25f2a86-54088b824695b844-00'
]);
