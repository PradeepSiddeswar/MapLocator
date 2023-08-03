const mongoose = require('mongoose');
const schema = mongoose.Schema

const requirment1Schema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
      },
      originalName: {
        type: String,
        required: true
      },
      mimeType: {
        type: String,
        required: true
      },
      size: {
        type: Number,
        required: true
      },
      uploadDate: {
        type: Date,
        default: Date.now
      }
    });

const requirment1DB = mongoose.model('requirment1', requirment1Schema);
module.exports = requirment1DB;