console.log("Hello Worl");
function sendMessage(){
    let message = document.getElementById('typing-box').value;
    let html = '<div class="message-box my-message-box">'+ 
    '<div class="message my-message">' + message + '</div>'
     + '<div class="separator"></div>' + '</div>';
    
    document.getElementById('message-area').innerHTML += html;

    document.getElementById('typing-box').value ="";
}