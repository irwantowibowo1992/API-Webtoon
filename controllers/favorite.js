const models = require('../models')
const User = models.user
const Webtoon = models.webtoon

//Get All Favorite
exports.myFavorite=(req,res) => {
  User.findAll({
    include: [
      {
        model: Webtoon,
        through: {attributes: []}
      }
    ]
  }).then(fav => res.send(fav))
}

//Get All Favorite by userId
exports.userFavorite=(req,res) => {
  User.findOne({
    include: [
      {
        model: Webtoon,
        through: {attributes: []}
      }
    ],
    where: {
      id: req.params.userId
    }
  }).then(fav => res.send(fav.webtoons))
}
