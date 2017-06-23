const Listing = require('../models/Listing');
const User = require('../models/User');

module.exports = function (router) {
    //get by parameters - GET
    

    //get all Listings - GET
    router.get('/api/getall', (req, res) => {
        Listing.find({})
        .exec((err, data) => {
            err 
                ? res.send(err)
                : res.json(data); 
        }) 
    }); 

    //book a listing - PATCH
    router.patch('/api/book', (req, res) => {
        let currentListingId = req.body.currentListing._id;
        Listing.update({ _id: currentListingId }, { 
            $push: {
                bookedDates: {
                    start: req.body.dates.startDate,
                    end: req.body.dates.endDate
                }
            } 
        },
        //callback for update
        (err, result) => {
            err
                ? res.send(err)
                : res.json(result);
        }); 
    }); 

    //swap a listing - PATCH

    //get all swappable listings - GET
    router.get('/api/swappable', (req, res) => {
        Listing.find({ swappable: true })
            .exec((err, data) => {
                err 
                    ? res.send(err)
                    : res.json(data) 
            }); 
    });
    //get all sublettable listings - GET
    router.get('/api/sublettable', (req, res) => {
        Listing.find({ sublettable: true })
            .exec((err, data) => {
                err 
                    ? res.send(err)
                    : res.json(data) 
            }); 
    });

    //get all of users listings - GET
    router.get('/api/userlistings/:id', (req, res) => {
        Listing.find({ owner: req.params.id })
            .exec((err, data) => {
                err 
                    ? res.send(err)
                    : res.json(data) 
            })
    });
    

    //edit a listing - PATCH

    //add a listing - POST

    //send a message -  POST
   
    //delete a message -  DELETE

    //delete a listing - DELETE
    
}
