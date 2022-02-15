const Categories = require('../services/categoriesService');

const create = async (req, res) => {
  try {
    const { id, name } = await Categories.create(req.body.name);
    console.log(req.body.name);
    return res.status(201).json({ id, name });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  create,
};
