const http = require("http")
// primero requerimos la libreria de http

http.createServer(function(req, res){
// el metodo .createServer nos va a crear nuestro servidor
    
    switch (req.url){
    // el metodo .url va a elegir el response que vamos a ver
    // en pantalla segun el request que determinemos.     
    }

    res.writeHead(200, {"Content-Type": "text/plain"});
    // .writeHead recibe 2 parametros, 
    //1ro) estado de la respuesta (200 suele ser lo comun)
    //2do) son los datos del encabezado 
    
    res.end("Prueba!!")
    //res.end es lo que va a ver el usuario segun el request,
    // y el metodo .end tiene que recibir SIEMPRE UN STRING

}).listen(3030, "localhost");
