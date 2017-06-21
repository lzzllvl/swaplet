const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    }, 
    lastName: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true,
    }, 

    password: {
        type: String,
        required: true
    },

});

module.exports = model.call(mongoose, "User", UserSchema);

