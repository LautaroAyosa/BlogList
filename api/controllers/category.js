const categoriesRouter = require('express').Router()
const Category = require('../models/category')

categoriesRouter.get('/', async (req, res) => {
  const categories = await Category.find({})
  res.json(categories)
})

categoriesRouter.get('/:id', async (req, res) => {
  const category = await Category.findById(req.params.id)
  res.json(category)
})

categoriesRouter.post('/', async (req, res) => {
    const category = await new Category(req.body)
    const savedCategory = await category.save()  
    res.status(201).json(savedCategory)
  })
  
  categoriesRouter.delete('/:id', async (req, res) => {
    const categoryToDelete = await Category.findById(req.params.id)
    if (!categoryToDelete) {
        res.status(404).send({ error: 'that Category does not exist' })
    } else {
        await Category.deleteOne({ _id: req.params.id })
        res.status(204).end()
    }
  })
  
  categoriesRouter.put('/:id', async (req, res) => {
    const updatedCategory = await Category.findOneAndUpdate(
        {_id: req.params.id}, 
        req.body, 
        {returnDocument: 'after'}
    )
    res.status(200).json(updatedCategory)
  })

module.exports = categoriesRouter