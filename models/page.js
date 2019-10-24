'use strict';
module.exports = (sequelize, DataTypes) => {
  const page = sequelize.define('page', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    detailwebtoonId: DataTypes.INTEGER
  }, {});
  page.associate = function(models) {
    // associations can be defined here
    page.belongsTo(models.detailwebtoon,{
      foreignKey: 'detailwebtoonId'
    })
  };
  return page;
};
