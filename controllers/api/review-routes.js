const router = require('express').Router();
const { Review } = require('../../models');

// POST /api/reviews
router.post('/', async (req, res) => {
    try {
        const dbReviewData = await Review.create({
        title: req.body.title,
        review_text: req.body.review_text,
        user_id: req.session.user_id,
        category_id: req.body.category_id,
        });
        res.status(200).json(dbReviewData);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
    });

// Put /api/reviews/1
router.put('/:id', async (req, res) => {
    try {
        const dbReviewData = await Review.update(
        {
            review_text: req.body.review_text,
        },
        {
            where: {
            id: req.params.id,
            },
        }
        );
        if (!dbReviewData) {
        res.status(404).json({ message: 'No review found with this id' });
        return;
        }
        res.status(200).json(dbReviewData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    });

// DELETE /api/review/1

router.delete('/:id', async (req, res) => {
    try {
        const dbReviewData = await Review.destroy({
        where: {
            id: req.params.id,
        },
        });
        if (!dbReviewData) {
        res.status(404).json({ message: 'No review found with this id' });
        return;
        }
        res.status(200).json(dbReviewData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    });


module.exports = router;