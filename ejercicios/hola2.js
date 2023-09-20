var http = require('http');

var manejador = function(soicitud,respuesta){
    console.log('Conexion entrante');
    respuesta.end('Hola mundo!');
};

var servidor = http.createServer(manejador);

servidor.listen(8080);