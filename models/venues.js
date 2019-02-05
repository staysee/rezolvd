const mongoose = require('mongoose');

const venueSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    categories: [String],
    contact: {
        phone: String,
        address: String,
        coordinates: {
            lat: Number,
            lng: Number
        }
    },
    created: {
        type: Date,
        default: Date.now
    }
})

const Venue = mongoose.model('Venue', venueSchema);
module.exports = { Venue };