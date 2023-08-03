const requirmentDB = require("../Model/requirment_models")
const path = require("path")

exports.create = async (req, res) => {


    console.log(req.body);
    console.log(req.protocol + "://" + req.get("host"), "url" )
    if(!req.body) {
        res.status(400).send("Content Connt Be Empty")
        return
    }

    const requirment = new requirmentDB({
        name: req.body.name,
        email: req.body.email,
        PhoneNumber: req.body.PhoneNumber,
        WhatsappNumber: req.body.WhatsappNumber,
        address: req.body.address,
        image: req.file&&req.file.filename ? req.protocol + "://" +req.get("host")+"/images/" + req.file.filename : "",
        rating: req.body.rating,
        message: req.body.message
    })
    requirment.save(requirment)
     .then(data => {
        res.status(200).send(data)
     })
     .catch(error => {
        res.status(500).send({
            message: error
        })
     })
    }
