const express = require("express");
const route = express.Router()
const requimentmulter = require("../config/requirment_multer") 
const requirmentcontroller = require("../Controller/requirment_controller")

route.post("/", requimentmulter.single("image"), requirmentcontroller.create)

module.exports = route