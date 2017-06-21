module.exports = function(router, groot) {
    //default first page
    router.get('/', (req, res) => {
        res.sendFile("public/index.html", {"root" : groot});
    });
    //view listings page

    //user interactions page

    
}