

const express = require('express');
const app = express();

app.listen(process.env.PORT || 5000);
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

let users = [
    {username: "sophanna", password:"123", color: "red"},
    {username: "sothean", password:"123", color: "green"}
]
app.get ('/users',(req,res)=>res.send(users));



// get users to updat




