//Server setup
const express = require('express');
const app = express();
const path = require("path");
const router = express.Router();
const port = 3000;

app.use(express.static(__dirname+"/public"));
//Load html homepage at start
app.get('/', function (req, res){
  res.sendFile(path.join(__dirname, 'home.html'));
})
//Show on terminal the app is active on port 3000
app.listen(port,()=>{
  console.log('App listening on port 3000')
})
