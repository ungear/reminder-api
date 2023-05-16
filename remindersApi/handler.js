'use strict';

module.exports.getAll = async (event) => {
  const userEmail = event.requestContext.authorizer.jwt.claims.email;
  const reminders = [
    { id: 1, triggerTime: new Date().getTime(), text: 'first reminder text' },
    { id: 2, triggerTime: new Date().getTime(), text: 'second reminder text' },
  ]
  return {
    statusCode: 200,
    headers: {
      "content-type":"application/json",
    },
    body: JSON.stringify(reminders)
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
