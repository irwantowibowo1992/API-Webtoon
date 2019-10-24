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

    return queryInterface.bulkInsert('pages', [
      {
        title: 'cover.png',
        image: 'http://s5.mkklcdnv5.com/mangakakalot/c2/crayon_shinchan/vol01_chapter_1_mother_and_i_are_good_friends_you_know/6.jpg',
        detailwebtoonId: 1
      },
      {
        title: '1.png',
        image: 'http://s5.mkklcdnv5.com/mangakakalot/c2/crayon_shinchan/vol01_chapter_1_mother_and_i_are_good_friends_you_know/7.jpg',
        detailwebtoonId: 1
      },
      {
        title: '2.png',
        image: 'http://s5.mkklcdnv5.com/mangakakalot/c2/crayon_shinchan/vol01_chapter_1_mother_and_i_are_good_friends_you_know/8.jpg',
        detailwebtoonId: 1
      },
      {
        title: '3.png',
        image: '',
        detailwebtoonId: 1
      },
      {
        title: '4.png',
        image: 'http://s5.mkklcdnv5.com/mangakakalot/c2/crayon_shinchan/vol01_chapter_1_mother_and_i_are_good_friends_you_know/9.jpg',
        detailwebtoonId: 1
      },
      {
        title: '5.png',
        image: 'http://s5.mkklcdnv5.com/mangakakalot/c2/crayon_shinchan/vol01_chapter_1_mother_and_i_are_good_friends_you_know/10.jpg',
        detailwebtoonId: 1
      },

      {
        title: 'cover.png',
        image: 'http://s5.mkklcdnv5.com/mangakakalot/c2/crayon_shinchan/vol01_chapter_2_mother_and_i_are_good_friends_you_know/5.jpg',
        detailwebtoonId: 2
      },
      {
        title: '1.png',
        image: 'http://s5.mkklcdnv5.com/mangakakalot/c2/crayon_shinchan/vol01_chapter_2_mother_and_i_are_good_friends_you_know/6.jpg',
        detailwebtoonId: 2
      },
      {
        title: '2.png',
        image: 'http://s5.mkklcdnv5.com/mangakakalot/c2/crayon_shinchan/vol01_chapter_2_mother_and_i_are_good_friends_you_know/4.jpg',
        detailwebtoonId: 2
      },


      {
        title: 'cover.png',
        image: 'http://s5.mkklcdnv5.com/mangakakalot/c2/crayon_shinchan/vol01_chapter_3_mother_and_i_are_good_friends_you_know/5.jpg',
        detailwebtoonId: 2
      },
      {
        title: '1.png',
        image: 'http://s5.mkklcdnv5.com/mangakakalot/c2/crayon_shinchan/vol01_chapter_3_mother_and_i_are_good_friends_you_know/6.jpg',
        detailwebtoonId: 2
      },
      {
        title: '2.png',
        image: 'http://s5.mkklcdnv5.com/mangakakalot/c2/crayon_shinchan/vol01_chapter_3_mother_and_i_are_good_friends_you_know/7.jpg',
        detailwebtoonId: 2
      },
      {
        title: '3.png',
        image: 'http://s5.mkklcdnv5.com/mangakakalot/c2/crayon_shinchan/vol01_chapter_3_mother_and_i_are_good_friends_you_know/8.jpg',
        detailwebtoonId: 2
      },




      {
        title: 'cover.png',
        image: 'https://s6.mkklcdnv6.com/mangakakalot/x1/xm918882/vol1_chapter_1_excuse_me_for_a_little_bit/1.jpg',
        detailwebtoonId: 1
      },
      {
        title: '1.png',
        image: 'http://l.mangatown.com/store/manga/31930/001.0/compressed/v20190402_145921_1695.jpg',
        detailwebtoonId: 1
      },
      {
        title: '2.png',
        image: 'https://cdn.mangahub.io/file/imghub/ninja-hattori-kun/1/2.jpg',
        detailwebtoonId: 1
      },
      {
        title: '3.png',
        image: 'http://l.mangatown.com/store/manga/31930/001.0/compressed/v20190402_145921_1703.jpg',
        detailwebtoonId: 1
      },

      {
        title: 'cover.png',
        image: 'https://i.pinimg.com/236x/71/d5/5b/71d55bf51d56af430abbbdb45cb6f025--movie-tv-cartoon-characters.jpg',
        detailwebtoonId: 1
      },
      {
        title: '1.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7qtQLjE1IpYB2rFas1FTP9HVuh0c0c6AXIKGNWgyr4mtSsoq58Ag',
        detailwebtoonId: 1
      },
      {
        title: '2.png',
        image: 'http://s5.mkklcdnv5.com/mangakakalot/c2/crayon_shinchan/vol01_chapter_2_mother_and_i_are_good_friends_you_know/4.jpg',
        detailwebtoonId: 1
      },


      {
        title: 'cover.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDPjW2EjXwx7ce2Hstkn3gH_fWtVGCEg0Zoq0yIRDDM61WtOB',
        detailwebtoonId: 2
      },
      {
        title: '1.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJzG67clHmwtMaBpmRBReH0ZomUeo18US0ZZQEdAnms-hJbTZ',
        detailwebtoonId: 2
      },
      {
        title: '2.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtzrMb4Vkqy6-_uaXBul9eacOTsOAV90P4GJ0p26XIk8hqIOBq',
        detailwebtoonId: 2
      },
      {
        title: '3.png',
        image: 'https://orig10.deviantart.net/ee7b/f/2017/062/c/5/wario_master_of_disguise_by_doctormoodb-db13g3k.jpg',
        detailwebtoonId: 2
      },




      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

   return queryInterface.bulkDelete('pages', null, {});
  }
};
