const Airtable = require('airtable-node');
 
const airtable = new Airtable({ apiKey: 'xxx' })
  .base('appRvT3sM3XOBruUk')
  .table('Team Members')
 

exports.handler = async (event, context, cb) => {
    return {
        statusCode: 200,
        body: 'Airtable Function',
    }
}