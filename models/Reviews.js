const mongoose = require("mongoose");
const User = require("./User");

const reviewsSchema = new mongoose.Schema({

    user: {
        type: String
    },
    
    body: {
        type: String,
        required: [true, "review description cannot be empty"]
    },

    listing: {
        type: mongoose.Types.ObjectId,
        ref: "Listings",
        required: [true, "listing cannot be empty"]
    },

},

{ 
    timestamps: true
});

const Reviews = mongoose.model("Reviews", reviewsSchema);

module.exports = Reviews;