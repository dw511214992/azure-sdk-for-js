let nock = require('nock');

module.exports.hash = "f28d96f33a82d81aa63673cd5d92488b";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://https%3A%2F%2Fendpoint', {"encodedQueryParams":true})
  .get('/deviceupdate/sdkinstance/management/devices')
  .query(true)
  .reply(200, {"value":[{"deviceId":"joseph-edgevm1","deviceClassId":"0919e3ae422a2bfa8c84ff905813e60351e456d1","manufacturer":"fabrikam","model":"vacuum","lastAttemptedUpdateId":null,"installedUpdateId":null,"onLatestUpdate":false,"deploymentStatus":"NotStarted","groupId":"testgroup","lastDeploymentId":null,"lastInstallResult":{"updateInstallResult":{"resultCode":null,"extendedResultCode":null},"resultCode":null,"extendedResultCode":null}},{"deviceId":"nox-sdk-test-1","deviceClassId":"0919e3ae422a2bfa8c84ff905813e60351e456d1","manufacturer":"fabrikam","model":"vacuum","lastAttemptedUpdateId":null,"installedUpdateId":null,"onLatestUpdate":false,"deploymentStatus":"Succeeded","groupId":"testgroup","lastDeploymentId":null,"lastInstallResult":{"updateInstallResult":{"resultCode":700,"extendedResultCode":0,"resultDetails":""},"resultCode":700,"extendedResultCode":0,"resultDetails":""}}]}, [
  'Date',
  'Tue, 16 Nov 2021 06:06:19 GMT',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '882',
  'traceparent',
  '00-77f80fa9bf450749a6fe76bbb03e7359-1c1666394290424b-00'
]);
