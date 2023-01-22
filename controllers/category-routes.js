const router = require('express').Router();
const { Category, Review, Comment } = require('../models');

// GET all categories
router.get('/categories', async (req, res) => {
  try {
    const dbCategoryData = await Category.findAll({
      include: [
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
router.get('/categories/:id', async (req, res) => {
  try {
    const dbCategoryData = await Category.findByPk(req.params.id, {
      include: [
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
