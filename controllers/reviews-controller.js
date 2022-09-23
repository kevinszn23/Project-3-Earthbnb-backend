const express = require(`express`);
const router = express.Router();

router.use(express.json());

router.use(express.urlencoded({ extended: false }));

const db = require(`../models`);

router.get(`/`, async (req, res) => {
    try {
        const allReviews = await db.Reviews.find({});
        res.json(allReviews);

    } catch (error) {
        console.log(error)
    }
});

router.post(`/`, async (req, res) => {
    try {
        const newReview = await db.Reviews.create(req.body);

    } catch (error) {
        console.log(error);
    }
});

router.get(`/:id`, async (req, res) => {
    try {
        res.json(
            await db.Reviews.findById(req.params.id)
        );
    } catch (error) {
        console.log(error);
    }
});

router.put(`/:id`, async (req, res) => {
    try {
       res.json(
        await db.Reviews.findByIdAndUpdate(req.params.id, req.body, { new: true })
       );
    } catch (error) {
        console.log(error)
    }
});

router.delete(`/:id`, async (req, res) => {
    try {
        res.json(
            await db.Reviews.findByIdAndRemove(req.params.id)
        );
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;