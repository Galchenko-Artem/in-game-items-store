const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User);
    }
  }
  Basket.init({
    name: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    image: DataTypes.TEXT,
    UserId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};
