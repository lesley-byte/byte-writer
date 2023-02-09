const router = require('express').Router();
const { User, Review, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET all comments
router.get('/', withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comment.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Review,
          attributes: ['title', 'review_text', 'userId', 'category_id', 'date'],
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
    res.render('comment', {
      comments,
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
      username: req.session.username,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one comment
router.get('/:id', withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comment.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Review,
          attributes: ['title', 'review_text', 'userId', 'category_id', 'date'],
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
      userId: req.session.userId,
      username: req.session.username,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get update comment route
router.get('/update/:id', withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comment.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Review,
          attributes: ['title', 'review_text', 'userId', 'category_id', 'date'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
      ],
    });
    const comment = dbCommentData.get({ plain: true });
    res.render('updatecomment', {
      comment,
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
      username: req.session.username,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get delete comment route
router.get('/delete/:id', withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comment.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Review,
          attributes: ['title', 'review_text', 'userId', 'category_id', 'date'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
      ],
    });
    const comment = dbCommentData.get({ plain: true });
    res.render('delete-comment', {
      comment,
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
      username: req.session.username,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
