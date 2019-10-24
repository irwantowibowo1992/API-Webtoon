'use strict';
module.exports = (sequelize, DataTypes) => {
  const favorite = sequelize.define('favorite', {
    webtoonId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  favorite.associate = function(models) {
    // associations can be defined here
  };
  return favorite;
};