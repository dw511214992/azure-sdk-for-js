let nock = require('nock');

module.exports.hash = "7c95c142407c285c7a1e79a23bca4eee";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '3e1d96a1-42b4-472f-9ad0-43d2db110200',
  'x-ms-ests-server',
  '2.1.12231.8 - KRSLR1 ProdSlices',
  'Set-Cookie',
  'fpc=Avv5XTF0nhlCvthKmQOG3J4; expires=Sat, 18-Dec-2021 07:42:04 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrDQlO_ScRuXC9cyG_0xxdiFcbvYjb75L3KFWDxb5GOG2m6kp75Xy6A7SQHNtC345nB_SQJNNZA1PBDZGqFpq4ce_KxzjvACLHDyITlxFZPCd929KjeNJP1L1-oeY8aApwQx2T_5Q9mFyh1jkLondCB3nXOxaeELlKd9TM8csZhw8gAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 18 Nov 2021 07:42:04 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/kerberos","tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'd2d0a0fd-aa12-4284-8cd0-f42ba6540200',
  'x-ms-ests-server',
  '2.1.12231.8 - SEASLR1 ProdSlices',
  'Set-Cookie',
  'fpc=Ar5BgnTG3mdJqoMq96TXNTc; expires=Sat, 18-Dec-2021 07:42:04 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrjKMxcllCHWLCvrmsdfh4LEgRt0o2RFzAXaL0jUqUiJbHTnzAo0U6-7_l0sf12XFvdU32c5CAkjM7jccILETjtQ8tx1g8t31Z3ib7PgYBIVPNG2EkgegejerdesYnBPCTQd0ScALVDdzXtgX-Oq3wN4GblyyGWfF3kAeUnHQ1H0AgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 18 Nov 2021 07:42:04 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.3.3&x-client-OS=win32&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=12cdf212-07a4-48ec-a6ab-31ab38fcee40&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22cp1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '29e57e81-63ab-4a29-9694-50f0c4340200',
  'x-ms-ests-server',
  '2.1.12231.8 - SEASLR2 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=As7TRpm-lSNKpxMl5Q5l8OLzixNsAQAAAMz6J9kOAAAA; expires=Sat, 18-Dec-2021 07:42:04 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 18 Nov 2021 07:42:04 GMT',
  'Content-Length',
  '1701'
]);

nock('https://https%3A%2F%2Fendpoint', {"encodedQueryParams":true})
  .get('/deviceupdate/sdkinstance/management/groups')
  .query(true)
  .reply(200, {"value":[{"deploymentId":"test20211117112017","groupId":"testgroup","tags":["testgroup"],"createdDateTime":"2021-11-16T00:49:25.141+00:00","groupType":"DeviceClassIdAndIoTHubTag","deviceCount":2,"deviceClassId":"0919e3ae422a2bfa8c84ff905813e60351e456d1"},{"groupId":"Invalidtestgroup","tags":["testgroup"],"createdDateTime":"2021-11-16T00:49:25.141+00:00","groupType":"InvalidDeviceClassIdAndIoTHubTag","deviceCount":0,"deviceClassId":"0919e3ae422a2bfa8c84ff905813e60351e456d1"},{"deploymentId":"test1118014304","groupId":"dpokluda-edgevm","tags":["dpokluda-edgevm"],"createdDateTime":"2021-11-17T22:57:28.78+00:00","groupType":"DeviceClassIdAndIoTHubTag","deviceCount":1,"deviceClassId":"0919e3ae422a2bfa8c84ff905813e60351e456d1"},{"groupId":"Invaliddpokluda-edgevm","tags":["dpokluda-edgevm"],"createdDateTime":"2021-11-17T22:57:28.78+00:00","groupType":"InvalidDeviceClassIdAndIoTHubTag","deviceCount":0,"deviceClassId":"0919e3ae422a2bfa8c84ff905813e60351e456d1"}]}, [
  'Date',
  'Thu, 18 Nov 2021 07:42:04 GMT',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '1334',
  'traceparent',
  '00-5b18830b312b7245aac3af422c0010fa-7a6074046b2c754e-00'
]);

nock('https://https%3A%2F%2Fendpoint', {"encodedQueryParams":true})
  .put('/deviceupdate/sdkinstance/management/groups/joegroup', {"groupId":"joegroup","tags":["joegroup"],"createdDateTime":"2021-11-17T16:29:56.5770502+00:00","groupType":"DeviceClassIdAndIoTHubTag","deviceClassId":"0919e3ae422a2bfa8c84ff905813e60351e456d1"})
  .query(true)
  .reply(200, {"groupId":"joegroup","tags":["joegroup"],"createdDateTime":"2021-11-17T16:29:56.5770502+00:00","groupType":"DeviceClassIdAndIoTHubTag","deviceCount":1,"deviceClassId":"0919e3ae422a2bfa8c84ff905813e60351e456d1"}, [
  'Date',
  'Thu, 18 Nov 2021 07:42:05 GMT',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '253',
  'traceparent',
  '00-e5fab65d25bd0548882b34d504a93114-83b3b83e5f00144f-00'
]);

nock('https://https%3A%2F%2Fendpoint', {"encodedQueryParams":true})
  .get('/deviceupdate/sdkinstance/management/groups/joegroup')
  .query(true)
  .reply(200, {"groupId":"joegroup","tags":["joegroup"],"createdDateTime":"2021-11-17T16:29:56.5770502+00:00","groupType":"DeviceClassIdAndIoTHubTag","deviceCount":1,"deviceClassId":"0919e3ae422a2bfa8c84ff905813e60351e456d1"}, [
  'Date',
  'Thu, 18 Nov 2021 07:42:05 GMT',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Length',
  '253',
  'traceparent',
  '00-e788000ec0d0174cbac82503e2194377-6a6c3320c2cafd46-00'
]);

nock('https://https%3A%2F%2Fendpoint', {"encodedQueryParams":true})
  .delete('/deviceupdate/sdkinstance/management/groups/joegroup')
  .query(true)
  .reply(204, "", [
  'Date',
  'Thu, 18 Nov 2021 07:42:05 GMT',
  'traceparent',
  '00-f60fe9d67e132042acf3736f10df6260-f43cab3b2ac2b345-00'
]);
