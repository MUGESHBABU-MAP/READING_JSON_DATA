var url = require('url');
var fs = require('fs');

function renderHTML(path, response) {
    fs.readFile(path, null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

module.exports = {
  handleRequest: function(request, response) {
      response.writeHead(200, {'Content-Type': 'text/html'});

      var path = url.parse(request.url).pathname;
      switch (path) {
          case '/':
              renderHTML('./index.html', response);
              break;
          case '/index':
              renderHTML('./index.html',response);
              break;
          case '/login':
              renderHTML('./login.html', response);
              break;
          case '/login/yoursysteminfo':
              renderHTML('./yoursysteminfo.html', response);
              break;
          case '/yoursysteminfo':
              renderHTML('./yoursysteminfo.html', response);
              break;
          case '/back.jpg':
              renderHTML('./back.jpg',response);
              break;
          case '/back1.png':
              renderHTML('./back1.png',response);
              break;
          case '/user.png':
              renderHTML('./user.png',response);
              break;
          case '/style':
              renderHTML('./style.css', response);
              break;
          case '/yoursysteminfo.html':
              renderHTML('./yoursysteminfo.html', response);
              break;
          default:
              response.writeHead(404);
              response.write('Route not defined');
              response.end();
      }

  }
};