'use strict';
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports.getAll = async (event) => {
  // email is needed for future use
  // const userEmail = event.requestContext.authorizer.jwt.claims.email;
  const productsData = await docClient.scan({
    TableName : process.env.REMINDERS_DB_NAME
  })
    .promise();

  // const reminders = [
  //   { id: 1, triggerTime: new Date().getTime(), text: 'first reminder text' },
  //   { id: 2, triggerTime: new Date().getTime(), text: 'second reminder text' },
  // ]

  return {
    statusCode: 200,
    headers: {
      "content-type":"application/json",
    },
    body: JSON.stringify(productsData.Items)
  };
}

module.exports.create = async (event) => {
  const userEmail = event.requestContext.authorizer.jwt.claims.email;
  const reminderBodyParams = JSON.parse(event.body);
  return {
    statusCode: 200,
    headers: {
      "content-type":"application/json",
    },
    body: JSON.stringify(reminderBodyParams)
  };
}
