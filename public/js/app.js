
const PORT =5000;

function Message(event) {
    let chat = document.getElementById('chat_box');
    let div = document.createElement('div');
    div.className = 'msg';
    let span = document.createElement('span');
    span.textContent = text.value;
    div.appendChild(span);
    chat.appendChild(div);
    text.value = "";
};

const text = document.getElementById('text');
const sendMessage = document.querySelector("#send");
sendMessage.addEventListener("click", Message);
//.........hide show.......

function displayMwssage() {
    event.preventDefault();
    form.style.display = "none";
    row.style.display = 'block';
}
let row = document.querySelector('.row');
let log = document.getElementById('log');
log.addEventListener('click', displayMwssage);
let chat = document.querySelector('.class-chat');

let form = document.querySelector('.form');