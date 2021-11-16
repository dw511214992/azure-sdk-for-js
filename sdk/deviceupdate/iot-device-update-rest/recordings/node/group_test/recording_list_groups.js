let nock = require('nock');

module.exports.hash = "98b5c82234d251f039103fb0afa84c7c";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://https%3A%2F%2Fendpoint', {"encodedQueryParams":true})
  .get('/deviceupdate/sdkinstance/management/groups')
  .query(true)
  .reply(200, {"value":[{"deploymentId":"test2021111624739","groupId":"testgroup","tags":["testgroup"],"createdDateTime":"2021-11-16T00:49:25.141+00:00","groupType":"DeviceClassIdAndIoTHubTag","deviceCount":2,"deviceClassId":"0919e3ae422a2bfa8c84ff905813e60351e456d1"},{"groupId":"Invalidtestgroup","tags":["testgroup"],"createdDateTime":"2021-11-16T00:49:25.141+00:00","groupType":"InvalidDeviceClassIdAndIoTHubTag","deviceCount":0,"deviceClassId":"0919e3ae422a2bfa8c84ff905813e60351e456d1"}]}, [
  'Date',
  'Tue, 16 Nov 2021 06:06:22 GMT',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '668',
  'traceparent',
  '00-ccf7499d94a17042af84e68343d44ea9-a034fc38793efb45-00'
]);
