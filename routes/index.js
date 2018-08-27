var express = require("express"),
    router  =express.Router(),
    
    
   router.get("/", function(req, res){
    res.render("landing");
});


     //Register Route
         //Show  Register Form
module.exports = router;