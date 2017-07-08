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
       type: String,
       required: true
    },

    nightlyRate: {
        type: Number,
        required: true,
    },
    sublettable: {
        type: Boolean,
        required: true
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

    specifications: {
        bedrooms: {
            type: Number,
            required: true
        },
        bathrooms: {
            type: Number,
            required: true,
        },
        listingType: {
            type: String,
            required: true
        }

    },

});

//the .call() is used to context problems with the destructuring assignment
module.exports = model.call(mongoose, "Listing", ListingSchema);

