const express = require("express");
const route = express.Router()
const requiment1controller = require("../Controller/requirment1_controller")

const requiment1 = require("../Controller/requirment1_controller")

route.post("/", requiment1controller.create);

module.exports = route