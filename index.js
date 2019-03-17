const AnyProxy = require("anyproxy")
var server_port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT
var server_ip_address = process.env.IP || process.env.OPENSHIFT_NODEJS_IP


const options = {
    hostname: server_ip_address,
    port: server_port,
    // rule: require('myRSuleModule'),
    webInterface: {
      enable: false,
      // webPort: server_port
    },
    forceProxyHttps: false,
    wsIntercept: false,
    silent: false
  }
const proxyServer = new AnyProxy.ProxyServer(options)

proxyServer.proxyHostName = server_ip_address
proxyServer.on('ready', () => { console.log( "Listening on " + server_ip_address + ", port " + server_port ) });
proxyServer.on('error', (e) => { /* */ })

proxyServer.start();

console.log( "Listening on " + server_ip_address + ", port " + server_port )