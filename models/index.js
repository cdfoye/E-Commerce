// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsToMany(Category, {
  through: {
    model: Tag,
    unique: false
  },
  as: 'prod_cats'
});

// Categories have many Products
Category.belongsToMany(Product, {
  through: {
    model: Tag,
    unique: false
  },
  as: 'cat_prods'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'prod_tag'
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tag_prod'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
