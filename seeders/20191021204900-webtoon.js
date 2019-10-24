'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('webtoons', [
      {
        title: 'Crayon Shinchan',
        genre: 'Comedy',
        createdBy: 1,
        image: 'http://lh3.ggpht.com/-zMxVLXd6CAM/T6B9vrQc-fI/AAAAAAAAAQk/hCZ5_PiCiAY/Pelajaran%252520Berharga%252520dari%252520Serial%252520Crayon%252520Shinchan_img_1.jpg'
      },
      {
        title: 'Ninja Hatori',
        genre: 'Adventure',
        createdBy: 2,
        image: 'https://pbs.twimg.com/profile_images/3675707221/9c398efcec38a6b2b6074c1ae88e8f07_400x400.jpeg'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('webtoons', null, {});
  }
};
