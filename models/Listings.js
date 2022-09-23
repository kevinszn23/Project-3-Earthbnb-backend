const mongoose = require("mongoose");

const listingsSchema = new mongoose.Schema({

    user: {
        type: String
    },

    title: {
        type: String,
        required: [true, "title cannot be empty"]
    },

    image1: {
        type: String,
        required: [true, "images cannot be empty"]
    },
    image2: {
        type: String,
        required: [true, "image2 cannot be empty"]
    },
    image3: {
        type: String,
        required: [true, "image3 cannot be empty"]
    },
    image4: {
        type: String,
        required: [true, "image4 cannot be empty"]
    },
    image5: {
        type: String,
        required: [true, "image5 cannot be empty"]
    },

    location: {
        type: String,
        required: [true, "location cannot be empty"]
    },

    price: {
        type: String,
        required: [true, "price cannot be empty"]
    },

    reviews: {
        type: String,
        required: [true, "reviews cannot be empty"]
    },

    host: {
        type: String,
        required: [true, "host cannot be empty"]
    },

    guests: {
        type: Number,
        required: [true, "guests cannot be empty"]
    },

    bedrooms: {
        type: Number,
        required: [true, "bedrooms cannot be empty"]
    },

    beds: {
        type: Number,
        required: [true, "beds cannot be empty"]
    },

    baths: {
        type: Number,
        required: [true, "baths cannot be empty"]
    },

    dates: {
        type: String,
        required: [true, "dates cannot be empty"]
    },

    ratings: {
        type: Number,
        required: [true, "rating cannot be empty"]
    },

    description: {
        type: String,
        required: [true, "description cannot be empty"]
    }

},

{ 
    timestamps: true
});

const Listings = mongoose.model("Listings", listingsSchema);

module.exports = Listings;