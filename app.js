var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs');

var app = http.createServer(function (req, res) {
    if (req.url.indexOf('/img') != -1) {
        var filePath = req.url.split('/img')[1];
        fs.readFile(__dirname + '/build/img' + filePath, function (err, data) {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.write('Error 404: Resource not found.');
                console.log(err);
            } else {
                res.writeHead(200, {'Content-Type': 'image/svg+xml'});
                res.write(data);
            }
            res.end();
        });
    } else if (req.url.indexOf('/ioc') != -1) {
        var filePath = req.url.split('/ioc')[1];
        fs.readFile(__dirname + '/build' + filePath, function (err, data) {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.write('Error 404: Resource not found.');
                console.log(err);
            } else {
                res.writeHead(200, {'Content-Type': 'image/svg+xml'});
                res.write(data);
            }
            res.end();
        });
    } else if (req.url.indexOf('/js') != -1) {
        var filePath = req.url.split('/js')[1];
        fs.readFile(__dirname + '/build/static/js' + filePath, function (err, data) {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.write('Error 404: Resource not found.');
                console.log(err);
            } else {
                res.writeHead(200, {'Content-Type': 'text/javascript'});
                res.write(data);
            }
            res.end();
        });
    } else if(req.url.indexOf('/css') != -1) {
        var filePath = req.url.split('/css')[1];
        fs.readFile(__dirname + '/build/static/css' + filePath, function (err, data) {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.write('Error 404: Resource not found.');
                console.log(err);
            } else {
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.write(data);
            }
            res.end();
        });
    } else if(req.url.indexOf('/eot') != -1) {
        var filePath = req.url.split('/eot')[1];
        fs.readFile(__dirname + '/build/static/media' + filePath, function (err, data) {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.write('Error 404: Resource not found.');
                console.log(err);
            } else {
                res.writeHead(200, {'Content-Type': 'application/vnd.ms-fontobject'});
                res.write(data);
            }
            res.end();
        });
    } else if(req.url.indexOf('/ttf') != -1) {
        var filePath = req.url.split('/ttf')[1];
        fs.readFile(__dirname + '/build/static/media' + filePath, function (err, data) {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.write('Error 404: Resource not found.');
                console.log(err);
            } else {
                res.writeHead(200, {'Content-Type': 'application/x-font-ttf'});
                res.write(data);
            }
            res.end();
        });
    } else if(req.url.indexOf('/woff') != -1) {
        var filePath = req.url.split('/woff')[1];
        fs.readFile(__dirname + '/build/static/media' + filePath, function (err, data) {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.write('Error 404: Resource not found.');
                console.log(err);
            } else {
                res.writeHead(200, {'Content-Type': 'application/font-woff'});
                res.write(data);
            }
            res.end();
        });
    } else if(req.url.indexOf('/svg') != -1) {
        var filePath = req.url.split('/svg')[1];
        fs.readFile(__dirname + '/build/static/media' + filePath, function (err, data) {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.write('Error 404: Resource not found.');
                console.log(err);
            } else {
                res.writeHead(200, {'Content-Type': 'application/svg+xml'});
                res.write(data);
            }
            res.end();
        });
    }
    else {
        fs.readFile(__dirname + '/build/index.html', function (err, data) {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.write('Error 404: Resource not found.');
                console.log(err);
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
            }
            res.end();
        });
    }
}).listen(port, '0.0.0.0');

module.exports = app;