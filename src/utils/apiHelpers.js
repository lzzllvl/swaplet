const axios = require('axios');

const apiHelpers = {
    //map these to the api routes 
    //will be Promise based via axios
    getAllListings: function() {
        return axios.get('/api/getall');
    },

    getListingsByParams: function(paramsObject) {
        return axios.post('/api/params', paramsObject)
    },

    bookAListing: function(currentListing, datesObject) {
        // `datesObject` needs to be of this format
        // `{
        //   startDate: Date, --- JavaScript Date() object
        //   endDate: Date  
        //  }`
        return axios.patch('/api/book', { 
            currentListing : currentListing,
            dates: datesObject
        });
    }, 

    getAllSwappable: function() {
        return axios.get('/api/swappable');
    },
    
    getAllSublettable: function() {
        return axios.get('/api/sublettable');
    },

    getAllUserListings: function(user_id) {
        return axios.get('/api/userlistings/'+ user_id);
    },

    editThisListing: function(patchData) {
        return axios.patch('/api/editlisting', patchData);
    },

    addNewListing: function(newListing, user_id) {
        let postdata = {
            listingData: newListing,
            user_id: user_id
        };
        return axios.post('/api/addlisting/', postData);
    },

    getMessagesForUser: function(user_id) {
        return axios.get('/userMessages/'+ user_id);
    },

    sendMessage: function(fromUser, toUser, body) {
        let messagePackage = {
            fromUser: fromUser,
            toUser: toUser,
            body: body,
        }
        return axios.post('/api/newMessage', messagePackage);
    },
    
}

module.exports = apiHelpers;