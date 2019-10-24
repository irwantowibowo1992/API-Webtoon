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

    return queryInterface.bulkInsert('favorites', [
      {
        webtoonId: 1,
        userId: 1,
      },
      {
        webtoonId: 1,
        userId: 2,
      },
      {
        webtoonId: 2,
        userId: 1,
      },
      {
        webtoonId: 2,
        userId: 2,
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
    return queryInterface.bulkDelete('favorites', null, {});
  }
};
