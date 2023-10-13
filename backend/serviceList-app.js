const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors'); 

const serviceRoute = require('./route/serviceRoute.js')

const app = express()

app.use(express.static(path.join(__dirname,"dist")))
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
// CORS is enabled for all origins 
app.use(cors()); 

app.use("/api",serviceRoute)


app.listen(7898,function()
{	
	console.log("Server Run At : http://localhost:7898")
})