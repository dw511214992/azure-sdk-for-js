let nock = require('nock');

module.exports.hash = "1ef4181d85db1c9be18e15a081d4c812";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://https%3A%2F%2Fendpoint', {"encodedQueryParams":true})
  .get('/deviceupdate/sdkinstance/management/devicetags')
  .query(true)
  .reply(200, {"value":[]}, [
  'Date',
  'Tue, 16 Nov 2021 06:06:20 GMT',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '12',
  'traceparent',
  '00-eb06e2b543e13040b9484324c6ae785d-c64ac16dcbf34a42-00'
]);
