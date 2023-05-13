'use strict';

module.exports.getAll = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "content-type":"application/json",
    },
    body: JSON.stringify({text: 'get reminders'})
  };
}

module.exports.create = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "content-type":"application/json",
    },
    body: JSON.stringify({text: 'create reminder'})
  };
}
