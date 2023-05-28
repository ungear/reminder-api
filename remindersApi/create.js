const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports.create = async (event) => {
  const userEmail = event.requestContext.authorizer.jwt.claims.email;
  const reminderBodyParams = JSON.parse(event.body);

  // TODO: validate input

  const reminderUuid = AWS.util.uuid.v4();
  const newReminderParams = {
    TableName: process.env.REMINDERS_DB_NAME,
    Item: {
      id: reminderUuid,
      owner: userEmail,
      triggerTime: reminderBodyParams.triggerTime,
      text: reminderBodyParams.text,
    },
  };
  await docClient.put(newReminderParams).promise();

  // TODO: return result
  return {
    statusCode: 200,
    // headers: {
    //   "content-type":"application/json",
    // },
    // body: JSON.stringify(reminderBodyParams)
  };
}
