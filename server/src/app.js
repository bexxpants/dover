
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
var mongoose = require('mongoose');
mongoose.connect('mongodb://bexxpants:openseaseame18@ds117758.mlab.com:17758/doverusers');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Hello World!",
      description: "Hi there! How are you?"
    }]
  )
})

app.listen(process.env.PORT || 8081)
