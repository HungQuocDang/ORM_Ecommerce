const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({include:[Product]}).then (data => res.json(data));
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({where:{id:req.params.id}, include:[Product]}).then (data => res.json(data))
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body).then (data => res.json(data))
// POST http://localhost:3001/api/categories/
//json input:
// {
// 	"category_name": "Shirts  AAA",
// 		"products": [{
// 				"id": 4,
// 				"product_name": "Top AAA Record",
// 				"price": 12.99,
// 				"stock": 50,
// 				"category_id": 3
// 			}]
// }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  // Category.update({where:{id:req.params.id}, include:[Product]}).then (data => res.json(data))
  Category.update(req.body, {where:{id:req.params.id}}).then (data => res.json(data));
//PUT ttp://localhost:3001/api/categories/8
// json, input:
// {
// 	"id": 8,
// 	"category_name": "Shirts  ccccccc",
// 		"products": []
// }

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({where:{id:req.params.id}, include:[Product]}).then (data => res.json(data));
});

module.exports = router;
