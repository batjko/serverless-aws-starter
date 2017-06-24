import chuck from "chuck-norris-api";

export const healthCheck = (event, context, callback) => {
  console.log("healthCheck invoked.");
  chuck
    .getRandom({ number: 1 })
    .then(({ value }) =>
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          wisdom: value[0].joke
        })
      })
    )
    .catch(callback);
};
