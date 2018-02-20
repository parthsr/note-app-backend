const hapi = require('hapi');
const routes = require('./routes');

const server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: 8000,
});

server.route(routes);
if (!module.parent) {
  server.start((err) => {
    console.log('Server running at:', server.info.uri);
  });
}

module.exports = server;
