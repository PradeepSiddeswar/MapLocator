const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name : String,
    location: {
        type: { type: String, default: 'Point'},
        coordinates: [Number],
    },
});

placeSchema.index({ location: '2dsphere'});


const  placeDB = mongoose.model('Place', placeSchema);
module.exports = placeDB