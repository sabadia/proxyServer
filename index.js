const AnyProxy = require("anyproxy")
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'


const options = {
    hostname: server_ip_address,
    port: server_port,
    // rule: require('myRuleModule'),
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
proxyServer.on('error', (e) => { /* */ });
proxyServer.start();