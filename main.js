#!/usr/bin/env node
const http = require('http');
const express = require('express');

const hostname = '0.0.0.0';
const port = process.env.NODE_PORT || 3005;
const env = process.env;

const expressServer = express();
expressServer.get('/', (req, res) => res.send('Hello World!'))

expressServer.listen(port, () => console.log(`Example app listening on port ${port}!`))


/**
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  for (var k in env) {
    res.write(k + ": " + env[k] + "\n");
  }
  res.end();
});

server.listen(port, hostname, () => {
  console.log("Server running at http://" + hostname + ":" + port + "/");
});
 */