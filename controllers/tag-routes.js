const router = require('express').Router();
const { User, Review, Comment, Category, Tag } = require('../models');

// GET all tags
router.get('/', async (req, res) => {
  try {
    const dbTagData = await Tag.findAll({
    });
    const tag = dbTagData.map((tag) => tag.get({ plain: true }));
    res.render('tag', {
      tag,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one tag
router.get('/:id', async (req, res) => {
  try {
    const dbTagData = await Tag.findByPk(req.params.id, {
    });
    const tag = dbTagData.get({ plain: true });
    res.render('tag', {
      tag,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
