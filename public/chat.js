var socket = io.connect("http://localhost:5000");

var namOfPerson = document.getElementById("textName")

var message = document.getElementById("textMsg")

var sendBtn = document.getElementById("send")

var outputMsg = document.getElementById("output")

var textFeedback = document.getElementById("feedback")


//Function for submiting the message
//onclick function
sendBtn.addEventListener("click", function(){

    socket.emit("chat", {message:message.value,namOfPerson:namOfPerson.value});
    //console.log(namOfPerson.value);
    //console.log(message.value);
    
});


//function for showing the which person is typing the message
//keypress function
message.addEventListener("keypress", function(){

    socket.emit("typing", namOfPerson.value);
})

//Appending the message to the screen dynamically for all the users
socket.on("chat", function(data){

    textFeedback.innerHTML = '';
    outputMsg.innerHTML += '<p><strong>' + data.namOfPerson  + ': </strong>' + data.message + '</p>';

});


//appending the keypress function data for showing which person is typing the messag
socket.on("typing", function(data){

    textFeedback.innerHTML = '<p><em>' + data + '&nbspis typing ........ </em></p>';

});