const express = require('express');

const model = require('../data/db-model');

const router = express.Router();

router.get('/recipes', (req, res) => {
  model.findRecipes()
  .then(recipes => {
    res.json(recipes);
  })
  .catch(error => {
    res.status(500).json({ message: 'Failed to get recipes: '+error });
  });
});


router.get('/recipes/:id/shoppinglist', (req, res) => {
    const { id } = req.params;
  
    model.findShoppingList(id)
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ message: 'Could not find scheme with given id.' })
      }
    })
    .catch(error => {
        res.status(500).json({ message: 'Failed to get recipes: '+error });
      });
  });


  router.get('/recipes/:id/instructions', (req, res) => {
    const { id } = req.params;
  
    model.getInstructions(id)
    .then(data => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ message: 'Could not find scheme with given id.' })
      }
    })
    .catch(error => {
        res.status(500).json({ message: 'Failed to get recipes: '+error });
      });
  });
module.exports = router;