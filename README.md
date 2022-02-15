# Serverless AWS Node Notifications

> Powered by [Courier](https://www.courier.com/)

This template demonstrates how to make a simple HTTP API Endpoint with Node.js
running on AWS Lambda and API Gateway using the Serverless Framework to send
notifications.

## Usage

### Configuration

`COURIER_AUTH_TOKEN` environment variable value needs to be set from the
[Courier API Keys](https://app.courier.com/settings/api-keys) page. For this
example app, it's done by storing it in the _AWS SSM Parameter Store_.

_CORS_ is enabled by default to allow requests from any origin, so that you can
test the application by making requests from any client-side app. You should
limit the allowed origins to your own domain when using this on production.

### Deployment

```
$ serverless deploy
```

After deploying, you should see output similar to:

```bash
Deploying aws-node-notifications to stage dev (us-east-1)

✔ Service deployed to stack aws-node-notifications-dev (152s)

endpoint: POST
 - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  notify: aws-node-notifications-dev-notify (1.9 kB)
```

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
curl --request POST \
     --url https://xxxxxxx.execute-api.us-east-1.amazonaws.com/ \
     --data '
{
  "message": {
    "to": {
      "email": "email@example.com",
    },
    "content": {
      "title": "Hello",
      "body": "World"
    }
  }
}
'
```

See the [Courier Send API](https://www.courier.com/docs/reference/send/message/)
docs for the supported request body formats.

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function notify
```
