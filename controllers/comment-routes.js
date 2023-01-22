const router = require('express').Router();
const { User, Review, Comment } = require('../models');

// GET all comments
router.get('/comments', async (req, res) => {
  try {
    const dbCommentData = await Comment.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Review,
          attributes: ['title', 'review_text', 'user_id', 'category_id'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
      ],
    });
    const comments = dbCommentData.map((comment) =>
      comment.get({ plain: true })
    );
    res.render('comments', {
      comments,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one comment
router.get('/comments/:id', async (req, res) => {
  try {
    const dbCommentData = await Comment.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Review,
          attributes: ['title', 'review_text', 'user_id', 'category_id'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
      ],
    });
    const comment = dbCommentData.get({ plain: true });
    res.render('comment', {
      comment,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
