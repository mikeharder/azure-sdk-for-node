// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test3';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test3.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test3.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2018-12-01.8.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 11 Dec 2018 18:27:21 GMT',
  etag: '0x8D65F964A038F60',
  location: 'https://test3.westcentralus.batch.azure.com/pools/nodesdktestpool1',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '0390abe2-2925-481a-b8ce-f0f3f1e3ee3b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test3.westcentralus.batch.azure.com/pools/nodesdktestpool1',
  date: 'Tue, 11 Dec 2018 18:27:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test3.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2018-12-01.8.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 11 Dec 2018 18:27:21 GMT',
  etag: '0x8D65F964A038F60',
  location: 'https://test3.westcentralus.batch.azure.com/pools/nodesdktestpool1',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '0390abe2-2925-481a-b8ce-f0f3f1e3ee3b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test3.westcentralus.batch.azure.com/pools/nodesdktestpool1',
  date: 'Tue, 11 Dec 2018 18:27:21 GMT',
  connection: 'close' });
 return result; }]];