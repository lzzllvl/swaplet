const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const MessageSchema = new Schema({
    sentFrom: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    sentTo: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    body: {
        type: String,
        required: true,
    }
});

module.exports = model.call(mongoose, "Message", MessageSchema)