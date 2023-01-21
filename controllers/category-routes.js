const router = require('express').Router();
const { Category, Review, Comment } = require('../models');

// GET all categories
router.get('/', async (req, res) => {
  try {
    const dbCategoryData = await Category.findAll({
      include: [
        {
          model: Review,
          attributes: ['id', 'title', 'review_text', 'user_id'],
        },
      ],
    });
    const categories = dbCategoryData.map((category) =>
      category.get({ plain: true })
    );
    res.render('categories', {
      categories,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one category
router.get('/:id', async (req, res) => {
  try {
    const dbCategoryData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Review,
          attributes: ['id', 'title', 'review_text', 'user_id'],
        },
      ],
    });
    const category = dbCategoryData.get({ plain: true });
    res.render('category', {
      category,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
