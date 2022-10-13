const Products = require("../models/products.model");

const productsControl = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Products.find();
      res.status(200).json({ data: products });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  getProduct: async (req, res) => {
    try {
      const product = await Products.findById(req.params.id);
      if (!products) {
        return res
          .status(404)
          .json({ message: "No Product found with this Id." });
      }
      res.status(200).json({ data: product });
    } catch (err) {
      res.status(200).json({ msg: err.message });
    }
  },
};
module.exports = productsControl;
