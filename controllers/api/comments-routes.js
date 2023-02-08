const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// POST /api/comments
router.post('/', withAuth, async (req, res) => {
    try {
        const dbCommentData = await Comment.create({
            ...req.body,
        comment_text: req.body.comment_text,
        userId: req.session.userId,
        review_id: req.body.review_id,
        });
        res.status(200).json(dbCommentData);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
    });

// Put /api/comments/1
router.put('/:id', async (req, res) => {
    try {
        const dbCommentData = await Comment.update(
        {
            comment_text: req.body.comment_text,
        },
        {
            where: {
            id: req.params.id,
            },
        }
        );
        if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id' });
        return;
        }
        res.status(200).json(dbCommentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    });

// DELETE /api/comments/1

router.delete('/:id', async (req, res) => {
    try {
        const dbCommentData = await Comment.destroy({
        where: {
            id: req.params.id,
        },
        });
        if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id' });
        return;
        }
        res.status(200).json(dbCommentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    });

module.exports = router;