const express = require('express');
const app = express();

app.listen(process.env.PORT || 5000, () => console.log("Running..."));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("clients"));

let users = [
    {id: 1,name: "rady",text: "Hello world"},
    // {id: 2,name: "dara",text: "Hello world"},
    // {id: 3,name: "vira",text: "Hello world"},
]

app.get('/users',(req,res)=> res.send(users))

app.post('/users',(req,res)=> {
    let username = req.query.name;
    let texts = req.body.text;
    let user = {
        id: users.length + 1,
        name: username,
        text: texts,
    }
    users.push(user);
    res.send(users);
})

function substract(a, b){
    return a - b;
}