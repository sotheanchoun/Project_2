const express = require('express');
const app = express();

app.listen(process.env.PORT || 5000, () => console.log("Running..."))
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("clients"));