const express = require('express');
const fs = require('fs');
route = express.Router()

let services = JSON.parse(fs.readFileSync('./model/serviceModel.json', 'UTF-8'));
let serviceBooking = JSON.parse(fs.readFileSync('./model/serviceBooking.json', 'UTF-8'));
route.get("/services",function(req,res)
{	
    res.send(services)
})

route.get("/services/:id",function(req,res)
{	
	var id = +req.params.id; 
    var service = services.find(s => s.id === id);
    res.send(service);
})

route.post("/bookings",function(req,res)
{	
    // res.writeHead(200, "content-type/application-json")
    serviceBooking.push(req.body);
    fs.writeFileSync('./model/serviceBooking.json', JSON.stringify(serviceBooking));
    res.send(serviceBooking)
})


module.exports = route