const cloudinary = require('cloudinary');
const axios = require('axios');

cloudinary.config({
    cloud_name: 'swaplet',
    api_key: '311893892462661',
    api_secret: 'uH_jt7NrGCD1pyJwLZFAA94F-5w'
})

const imageHelpers = {
    //helpers for uploading and displaying images with cloudinary
    addListingImage: (imageData) => {
        return axios.patch('/image/listing', imageData);
    }, 
    addProfileImage: (imageData) => {
        return axios.patch('/image/profile', imageData);
    }
}

module.exports = imageHelpers;