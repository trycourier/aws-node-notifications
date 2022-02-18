<!--
title: 'Serverless AWS Node Notifications'
description: 'This template demonstrates how to make a simple HTTP API Endpoint with Node.js running on AWS Lambda and API Gateway using the Serverless Framework to send notifications.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://www.courier.com/'
authorName: 'Courier'
authorAvatar: 'https://app.courier.com/static/favicon/android-icon-192x192.png'
-->

# Serverless AWS Node Notifications

> Powered by [Courier](https://www.courier.com/)

This template demonstrates how to make a simple HTTP API Endpoint with Node.js
running on AWS Lambda and API Gateway using the Serverless Framework to send
notifications.

## Usage

### Configuration

1. [Sign up](https://app.courier.com/signup/) for Courier account.
2. Install and configure one of the many
   [supported providers](https://www.courier.com/docs/guides/providers/):
   - [AWS SES](https://www.courier.com/docs/guides/providers/email/aws-ses/)
   - [AWS SNS](https://www.courier.com/docs/guides/providers/push/aws-sns/)
   - [SendGrid](https://www.courier.com/docs/guides/providers/email/sendgrid/)
   - [Twilio](https://www.courier.com/docs/guides/providers/sms/twilio/)
   - _...and many more [Email](https://www.courier.com/docs/guides/providers/email/),
     [Push](https://www.courier.com/docs/guides/providers/push/),
     [SMS](https://www.courier.com/docs/guides/providers/sms/), and
     [Direct Message](https://www.courier.com/docs/guides/providers/direct-message/)
     providers_
3. Grab your Courier API Key from [settings](https://app.courier.com/settings/api-keys).
4. Set the API Key value in the `COURIER_AUTH_TOKEN` environment variable.
   - In this example app it's done by storing it in _AWS SSM Parameter Store_

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
