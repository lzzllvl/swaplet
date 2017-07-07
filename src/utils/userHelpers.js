const axios = require('axios');


//promise based user utilites
const userHelpers = {
    sendLogin: function(userData) {
        return axios.post('/login', userData);
    },

    sendLogout: function(user_id) {

    },

    sendNewAccount: function(userData) {
        return axios.post('/signup', userData);
    }

    //TODO password and email editing
}

module.exports = userHelpers;