module.exports = function(router, groot) {
    //default first page
    router.get('/', (req, res) => {
        res.sendFile("/index.html", { "root" : groot });
    });
    
    //view listings page
    router.get('/browse', (req, res) => {
        res.sendFile("/browse.html", { 'root' : groot })
    });
    
    //user  home/interactions page
    router.get('/browse', (req, res) => {
        res.sendFile("/home.html", { 'root' : groot })
    });
    
}