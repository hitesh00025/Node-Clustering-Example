var cluster = require('cluster');
var http = require('http');
var numCPUs = 10;

if (cluster.isMaster) {

    for (var i = 0; i < numCPUs; i++) {
      console.log('Forking CPU:'+i);
        cluster.fork();
    }

  } else {
    http.createServer(function(req, res) {
 //Added extra sleep to make process busy
  setTimeout(function() {
  res.writeHead(200);
  console.log('process ' + process.pid + ' says hello!');
  res.end('process ' + process.pid + ' says hello!');
}, 10000);
//End
    }).listen(8000);
}
