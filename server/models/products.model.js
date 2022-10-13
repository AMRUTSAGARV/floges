const mongoose = require("mongoose");

const productsSchema = new mongoose({
  name: {
    type: String,
  },
});

module.exports = mongoose.model("Products", productsSchema);
