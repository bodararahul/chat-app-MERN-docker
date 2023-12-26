# chat-app - Chat Application 
chat-app is chat application build with the power of MERN Stack.

## Installation Guide

### Requirements
- [Nodejs](https://nodejs.org/en/download)
- [Mongodb](https://www.mongodb.com/docs/manual/administration/install-community/)
- [Docker](https://docs.docker.com/)


```shell
git clone https://github.com/bodararahul/chat-app-MERN-docker.git
cd chat-app-react-nodejs
```
Now rename env files from .env.example to .env
```shell
cd public
mv .env.example .env
cd ..
cd server
mv .env.example .env
cd ..
```

Now install the dependencies
```shell
cd server
npm install
cd ..
cd public
npm install
```
Run project using Docker

```shell
cd chat-app-react-nodejs
docker compose build
docker compose up
```
Done! Now open localhost:3000 in your browser.

Run projects manually

For Frontend.
```shell
cd public
npm start
```
For Backend.

Open another terminal in folder, Also make sure mongodb is running in background.
```shell
cd server
npm start
```

Done! Now open localhost:3000 in your browser.
