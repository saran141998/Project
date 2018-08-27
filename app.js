var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Campground  =require("./models/campground"),
    methodOverride =require("method-override");  
 //Requiring Routes
var campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes      = require("./routes/index");
mongoose.connect("mongodb://localhost/yelp_camp9");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
    //Passport Configuration
app.use(methodOverride("_method"));

app.use(express.static(__dirname+"/public"));

app.use("/",indexRoutes);
app.use("/campgrounds",campgroundRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started!");
});