const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

module.exports.getAll = async (event) => {
  // email is needed for future use
  // const userEmail = event.requestContext.authorizer.jwt.claims.email;
  const productsData = await docClient.scan({
    TableName : process.env.REMINDERS_DB_NAME
  })
    .promise();

  return {
    statusCode: 200,
    headers: {
      "content-type":"application/json",
    },
    body: JSON.stringify(productsData.Items)
  };
}