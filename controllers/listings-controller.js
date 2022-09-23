const express = require(`express`);
const router = express.Router();

const { Listings } = require('../models');

router.get(`/`, async (req, res) => {
    try {
        const allListings = await Listings.find({});
        res.json(allListings);

    } catch (error) {
        console.log(error)
    }
});

router.post(`/`, async (req, res) => {
    try {
        const newListing = await Listings.create(req.body);
        res.json(newListing);

    } catch (error) {
        console.log(error)
    }    
});

router.get(`/:id`, async (req, res) => {
    try {
        res.json(await Listings.findById(req.params.id));
    } catch (error) {
        console.log(error)
    }
});

router.put(`/:id`, async (req, res) => {
    try {
        res.json(
            await Listings.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        console.log(error)
    }
});

router.delete(`/:id`, async (req, res) => {
    try {
        res.json(
            await Listings.findByIdAndRemove(req.params.id)
        )
    } catch (error) {
        console.log(error);
    }
});

module.exports = router