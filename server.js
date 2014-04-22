var http = require('http'),
    https = require('https'),
    url = require("url"),
    path = require("path"),
    fs = require("fs")
    ;
var sockjs = require('sockjs');

var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};


var echo = sockjs.createServer();
echo.on('connection', function(conn) {
  conn.write("server-to-client");
  conn.on('data', function(message) {
      conn.write(message);
  });
  conn.on('close', function() {});
});

var server = http.createServer(function(request, response) {
  var uri = url.parse(request.url).pathname,
      filename = path.join(process.cwd(), uri);

  fs.exists(filename, function(exists) {
    if(!exists) {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not Found\n");
      response.end();
      return;
    }

    if (fs.statSync(filename).isDirectory()) filename += '/index.html';

    fs.readFile(filename, "binary", function(err, file) {
      if(err) {
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n");
        response.end();
        return;
      }
      response.writeHead(200);
      response.write(file, "binary");
      response.end();
    });
  });
});

echo.installHandlers(server, {prefix:'/echo'});
server.listen(8000, '0.0.0.0');

var sslserver = https.createServer(options, function(request, response) {
  var uri = url.parse(request.url).pathname,
      filename = path.join(process.cwd(), uri);

  fs.exists(filename, function(exists) {
    if(!exists) {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not Found\n");
      response.end();
      return;
    }

    if (fs.statSync(filename).isDirectory()) filename += '/index.html';

    fs.readFile(filename, "binary", function(err, file) {
      if(err) {
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n");
        response.end();
        return;
      }
      response.writeHead(200);
      response.write(file, "binary");
      response.end();
    });
  });
});

echo.installHandlers(sslserver, {prefix:'/echo'});
sslserver.listen(4430, '0.0.0.0');