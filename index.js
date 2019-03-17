const AnyProxy = require("anyproxy")
var server_port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'


const options = {
    hostname: server_ip_address,
    port: server_port + 1,
    // rule: require('myRSuleModule'),
    webInterface: {
      enable: true,
      webPort: server_port
    },
    forceProxyHttps: false,
    wsIntercept: false,
    silent: false
  }
const proxyServer = new AnyProxy.ProxyServer(options)

proxyServer.on('ready', () => { console.log( "Listening on " + server_ip_address + ", port " + server_port ) });
proxyServer.on('error', (e) => { /* */ })
proxyServer.proxyHostName = server_ip_address
proxyServer.start();