
// function sendMessage(){
    
// }

function displayInfo(res){
    const myMessage = document.querySelector('.message-box');
    let users = res.data;
    let list = document.querySelector('ul');
    if (list !== null) list.remove();
    console.log(users)
    const Message = document.createElement('div');
    Message.className = 't';
    const ul = document.createElement('ul');


    for (let user of users){
        let li = document.createElement('li');
        li.className = "myMessage";
        li.textContent = user.text;
       

        Message.appendChild(ul);
        ul.appendChild(li);
     
    }
    myMessage.appendChild(Message);
    Message.appendChild(ul);
}
function addText() {
    const text = document.querySelector('#typing-box').value;
    let user = {name:"unknow" , text: text};
    axios.post(url,user).then(displayInfo);
}



const url = "http://localhost:5000/users";
axios.get(url).then(displayInfo)


const btnSend = document.querySelector('button');
btnSend.addEventListener('click',addText);





// function displayInfo(res) {
//     let users = res.data;
//     let list = document.querySelector('ul');
//     let messageArea = document.createElement('div');
//     if (list !== null ) list.remove();
//     console.log(users);
//     const ul = document.querySelector('ul');
//     for (let user of users){
//         let li = document.createElement('li');
//         li.textContent = "@" + user.name + " : " + user.text;
//         console.log(li)
//         ul.appendChild(li);
//         messageArea.appendChild(ul).textContent;
//         document.body.appendChild(messageArea)
        
//     }
    
   
// }

// function addText(){
//     const text = document.querySelector('#text').value;
//     let user = {name: "unknown", text: text}
//     console.log(user);
//     axios.post(url,user).then(displayInfo);
// }

// const url = "http://localhost:5000/users";
// axios.get(url).then(displayInfo);

// const btnSend = document.querySelector('button');
// btnSend.addEventListener('click',addText);

