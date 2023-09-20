var http = require('http'),
fs = require('fs');

http.createServer(function(request, response) {
    response.whiteHead(200, {'Contet-Type': 'text/html'});

    switch(request.url){
        case '/':
            page = 'acme.html';
            break;

        case '/nosotros':
            page = 'nosotros.html';
            break;
        
        case '/servicios':
            page = 'servicios.html';
            break;

        case '/clientes':
            page = 'clientes.html';
            break;

        case '/contacto':
            page = 'contacto.html';
            break;

        default:
            page ='error.html';
            break;
    }
    fs.readFile('./'+page,function(error, data) {
        response.write(data);
        response.end();
    });
}).listen(8080);