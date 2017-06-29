listing1 = {   
    owner: "mongo objectID",
    address: {
        streetNumber: 1,
        streetName: "Main St", 
        city: "San Diego",
        state: "CA",
        zipCode: "92103"
    },
    nightlyRate: 127.00,
    sublettable: false, 
    swappable: true,
    bookedDates: [
        {
            start: Date.now,
            end: Date.now
        }, 
        {
            start: Date.now,
            end: Date.now
        }
    ],
    amenities: [
        "Hot Tub", 
        "Close to Beach",
        "Washer/Dryer"
    ], 
    imageLinks: [
        "https://s-media-cache-ak0.pinimg.com/736x/7f/be/50/7fbe50ec634c65709d7fe6ac267c4e6f.jpg",
        "http://clv.h-cdn.co/assets/16/31/640x320/landscape-1470159442-outside-the-lines-house-0916-index.jpg"
    ], 
    prefferedSwapLocations: [
        "San Francisco",
        "Dubai",
        "Mexico City"
    ], 
    specifications: {
        bedrooms: 3,
        bathrooms: 2.5,
        listingType: "House"
    }
}

listing2 = {   
    owner: "mongo objectID",
    address: {
        streetNumber: 3000,
        streetName: "Santa Monica Blvd", 
        city: "San Diego",
        state: "CA",
        zipCode: "92103"
    },
    nightlyRate: 300.00,
    sublettable: true, 
    swappable: true,
    bookedDates: [
        {
            start: Date.now,
            end: Date.now
        }, 
        {
            start: Date.now,
            end: Date.now
        }
    ],
    amenities: [
        "Hot Tub", 
        "Close to Beach",
        "Washer/Dryer"
    ], 
    imageLinks: [
        "https://s-media-cache-ak0.pinimg.com/736x/7f/be/50/7fbe50ec634c65709d7fe6ac267c4e6f.jpg",
        "http://clv.h-cdn.co/assets/16/31/640x320/landscape-1470159442-outside-the-lines-house-0916-index.jpg"
    ], 
    prefferedSwapLocations: [
        "San Francisco",
        "Dubai",
        "Mexico City"
    ], 
    specifications: {
        bedrooms: 5,
        bathrooms: 6,
        listingType: "Apt"
    }
}