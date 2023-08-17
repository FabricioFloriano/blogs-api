const CategoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  const newCategory = await CategoryService.createCategory(name);

  return res.status(201).json(newCategory);
};

const getAllCategories = async (req, res) => {
    const categories = await CategoryService.getAllCategories();
    return res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getAllCategories,
};