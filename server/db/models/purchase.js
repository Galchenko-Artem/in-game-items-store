const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Purchase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Product }) {
      this.belongsTo(User, { foreignKey: 'UserId' });
      this.belongsTo(Product, { foreignKey: 'ProductId' });
    }
  }
  Purchase.init({
    UserId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    details: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Purchase',
  });
  return Purchase;
};
