const mongoose = require("mongoose")
const schema = mongoose.Schema

const requirmentSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase:true,
    },
    PhoneNumber: {
        type: Number,
        required:true
    },
    WhatsappNumber: {
        type:Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

const requirmentDB = mongoose.model("requirment", requirmentSchema)
module.exports = requirmentDB