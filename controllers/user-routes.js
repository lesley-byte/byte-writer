const router = require('express').Router();
const { User, Review, Comment } = require('../models');

// GET all users
router.get('/', async (req, res) => {
  try {
    const dbUserData = await User.findAll({
      include: [
        {
          model: Review,
          attributes: ['title', 'review_text', 'user_id'],
        },
        {
          model: Comment,
          attributes: ['comment_text', 'user_id', 'review_id'],
          include: {
            model: Review,
            attributes: ['title'],
          },
        },
      ],
    });
    const users = dbUserData.map((user) => user.get({ plain: true }));
    res.render('users', {
      users,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one user
router.get('/user/:id', async (req, res) => {
  try {
    const dbUserData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Review,
          attributes: ['title', 'review_text', 'user_id'],
        },
        {
          model: Comment,
          attributes: ['comment_text', 'user_id', 'review_id'],
          include: {
            model: Review,
            attributes: ['title'],
          },
        },
      ],
    });
    const user = dbUserData.get({ plain: true });
    res.render('user', {
      user,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
