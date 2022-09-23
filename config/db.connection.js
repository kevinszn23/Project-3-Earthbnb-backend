const mongoose = require(`mongoose`);
const { MONGODB_URI } = process.env;
const seedDataListings = require('../models/seed_data/seed_Listings.js');
const Listings = require("../models/Listings.js")
const seedDataReviews = require("../models/seed_data/seed_Reviews")
const Reviews = require("../models/Reviews")
const seedDataUser = require("../models/seed_data/seed_User")
const User = require("../models/User")

mongoose.connect(MONGODB_URI, () => console.log(`Mongoose connection working`));

mongoose.connection
    .on("open", () => console.log(`You are connected to mongoose`))
    .on("close", () => console.log("You are disconnected from mongoose"))
    .on("error", (error) => console.log(error));

    // Listings.deleteMany({} , function (err, deletedListings) {
    //     if (err){ console.log(err)}
    //       console.log("Seed Listings data", deletedListings)
    //       mongoose.connection.close();
    //     });

    // Listings.insertMany(seedDataListings,(err, listings) => {
    //     if (err){ console.log(err)}
    //       console.log("Seed Listings data", listings)
    //       mongoose.connection.close();
    //     });

    // Reviews.insertMany(seedDataReviews,(err, reviews) => {
    //     if (err){ console.log(err)}
    //       console.log("Seed Reviews data", reviews)
    //       mongoose.connection.close();
    //     });

    // User.insertMany(seedDataUser,(err, user) => {
    //     if (err){ console.log(err)}
    //       console.log("Seed Listings data", user)
    //       mongoose.connection.close();
    //     });