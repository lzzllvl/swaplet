const axios = require('axios');

const apiHelpers = {
    //map these to the api routes 
    //will be Promise based via axios
    getAllListings: function() {
        return axios.get('/api/getall')
    },

    getListingsByParams: function(paramsObject) {
        return axios.post('/api/params', paramsObject)
    },

    bookAListing: function(currentListing) {
        return axios.patch('/api/book', currentListing);
    }, 

    getAllSwappable: function() {
        return axios.get('api/swappable');
    },

    //TODO using passport for userID info
    getAllUserListings: function(user_id) {
        return axios.get('/api/userlistings/'+ user_id);
    },

    editThisListing: function(patchData) {
        return axios.patch('/api/editlisting', newData);
    }, 

    addNewListing: function(newListing, user_id) {
        let postdata = {
            listingData: newListing,
            user_id: user_id
        };
        return axios.post('/api/addlisting/', postData);
    },

    sendMessage: function(fromUser, toUser, body) {
        let messagePackage = {
            fromUser: fromUser,
            toUser: toUser,
            body: body,
        }
        return axios.post('/api/newMessage', messagePackage);
    }
}

module.exports = apiHelpers;