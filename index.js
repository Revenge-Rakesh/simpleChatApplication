var express = require('express');

var socket = require('socket.io');

//used for image upload 
var multer = require('multer');

var app = express();

var server = app.listen(5000, function(){

 console.log("The server is running on the port 5000");

});


app.use(express.static('public'));

var upload = multer({dest: __dirname + '/uploads/images'});

var io = socket(server);

io.on('connection', function(socket){

        console.log(socket);
        socket.on("chat", function(data){

            io.sockets.emit("chat", data);

        });

        socket.on("typing", function(data){
       
            socket.broadcast.emit("typing", data);
    
        });
});

//function for uploading images
app.post('/upload', upload.single('image'), (req, res) => {
    if(req.file) {
        res.json(req.file);
    }
    else throw 'error';
});