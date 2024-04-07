const mongoose = require('mongoose');
const {Schema} = mongoose;

const LabourSchema = new Schema({
    type: {
        type: Number,
        required: true
    }, 
    name: {
        type: String,
        required: true
    }, 
    expertise: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    accountno: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Labour', LabourSchema)