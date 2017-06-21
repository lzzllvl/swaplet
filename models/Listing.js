const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ListingSchema = new Schema({

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },

    address: {
        streetNumber: {
            type: Number,
            required: true,
        }, 
        streetName: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true   
        },

        state: {
            type: String,
            required: true
        },

        zipCode: {
            type: Number,
            required: true
        }
    },

    nightlyRate: {
        type: Number,
        required: true,
    },

    swappable: {
        type: Boolean,
        required: true,
        default: false
    },
    
    bookedDates: [{
        start: {
            type: Date
        }, 
        end: {
            type: Date
        }
    }],

    amenities: {
        type: [String]
    },

    imageLinks:{
        type: [String]
    },

    preferredSwapLocations: {
        type: [String]
    },
});

//the .call() is used to context problems with the destructuring assignment
module.exports = model.call(mongoose, "Listing", ListingSchema);

