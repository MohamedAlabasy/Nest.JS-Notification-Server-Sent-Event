<h1 align="center">Nest.JS Notification Server Sent Event (SSE)</h1>

## Description:

The project aims to raise a notification using a server-sent-event (SSE).

## To run this project

`Step 1` : To use this project must install [Node.js](https://nodejs.org/en/) and [Mongodb](https://www.mongodb.com/try/download/community) Then Download the source code

```
git clone https://github.com/MohamedAlabasy/Nest.JS-Notification-Server-Sent-Event.git
```

`Step 2` : Enter the project file then install package

```
npm i
```

`Step 3` : Run server on watch mode :

```
npm run start:dev
```

`Step 4` : Open [postman](https://www.postman.com/downloads/) and import : [API Collation](https://github.com/MohamedAlabasy/Nest.JS-Notification-Server-Sent-Event/blob/main/api_collection.json) You will find it in the project file.

<hr>

<!-- ## Folder Structure

```bash
├── src
│   ├── interfaces => `for interfaces used in this project`
│   │      └── IMessage.interface.ts
│   │
│   │── notification => `for handel notification code`
│   │     ├── dto => `for handel data transfer object for notification`
│   │     ├── entities => `for notification schema`
│   │     ├── notification.controller.ts => `for handel notification functions and routes (endpoints)`
│   │     ├── notification.module.ts => `for handel notification Models`
│   │     └── notification.service.ts => `for handel notification database connection and query`
│   │
│   └── main.ts => `to run the server`
└──
``` -->

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```
