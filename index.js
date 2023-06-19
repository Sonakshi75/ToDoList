//jshint esversion:6

const express = require('express')
const bodyParser = require('body-parser')
var date = require(__dirname + "/date.js")
console.log(date())
const app = express()
let workItems = []
var inputs = ["Buy groceries","clean"]
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get("/", function(req,res){


  res.render('list', {listTitle : date(), input:inputs})
})

app.post("/", function(req,res){
  console.log(req.body)
  if(req.body.button == "Work"){
    workItems.push(req.body.input)
    res.redirect("/work")
  }
  else{
    inputs.push(req.body.input)
    res.redirect("/")
  }
})

app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List", input:workItems})
})

app.post("/work", function(req,res){
  console.log(req.body)
  let item = req.body.input
  workItems.push(item)
  res.redirect("/work")
})

app.listen(3000, function(){
  console.log("Server is running on port 3000")
})
