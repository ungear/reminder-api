const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports.remove = async (event) => {
  const reminderId = event.pathParameters.id;
  await docClient.delete({
    TableName: process.env.REMINDERS_DB_NAME,
    Key: {
      id: reminderId,
    },
  }).promise();

  return {
    statusCode: 200,
  };
}
