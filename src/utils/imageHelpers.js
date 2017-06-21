const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'swaplet',
    api_key: '311893892462661',
    api_secret: 'uH_jt7NrGCD1pyJwLZFAA94F-5w'
})

const imageHelpers = {
    //helpers for uploading and displaying images with cloudinary
}

module.exports = imageHelpers;