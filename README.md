# Serverless Example w/ Webpack

Simple starter project setting up a single `/healthCheck` API endpoint that is resolved by a small but incredibly important Lambda function,
which returns a status 200 and an object with a random Chuck Norris fact.

## Installation / Setup

1. Get an AWS account (I recommend the [Free Tier](https://aws.amazon.com/free/))
2. Set up a [new admin user](https://serverless.com/framework/docs/providers/aws/guide/credentials#creating-aws-access-keys), to get an API key and a secret.
3. Install the [serverless CLI](https://serverless.com/framework/docs/providers/aws/guide/installation/)
4. [Configure it to use the admin user](https://serverless.com/framework/docs/providers/aws/guide/credentials#setup-with-serverless-config-credentials-command).
5. Clone this repo, cd into it and `npm i` to install the dependencies
6. [Deploy](https://serverless.com/framework/docs/providers/aws/guide/deploying/) the thing as-is, typing `serverless deploy`.

## Testing the Lambda function

If the deployment was successful, you will see a URL. Something like:

```yaml
endpoints:
  GET - https://[blabla].execute-api.[aws-region].amazonaws.com/dev/healthCheck
```

You can test that url in your browser or Postman, with curl or what have you.
The response, if all went well, should look like this:

```json
{
  "wisdom": "Chuck Norris once ate a whole cake before his friends could tell him there was a stripper in it."
}
```

If you see any errors, you most likely haven't set up your admin user correctly. Read the links back at steps 2 and 4.

## Developing

Thanks to the webpack and babel config included, you can write proper ES.next code, including es6 modules, as you can see in `handler.js`.

Read the official [serverless framework docs](https://serverless.com/framework/docs/providers/aws/guide/serverless.yml) about how to use the `serverless.yml` file to set up your configuration and additional functions, including more REST endpoints (API Gateway) and resources like DynamoDB tables or S3 buckets etc.

Enjoy.
