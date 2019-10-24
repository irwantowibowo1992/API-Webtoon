const Sequelize = require  ('sequelize')
const models = require('../models')
const Webtoon = models.webtoon
const User = models.user
const Search = Sequelize.Op

exports.index=(req,res) => {
  const {title} = req.query
  if(title){
    Webtoon.findAll({
      include:[{
          model: User,
          // as: "createdBy"
      }],
      where: {
        title: {[Search.like] : `%${title}%`}
      }
    }).then(webtoon => res.send(webtoon))
  } else {
    Webtoon.findAll({
        include:[{
            model: User,
            // as: "createdBy"
        }]
    }).then(webtoon => res.send(webtoon))
  }
}

exports.show = (req, res) => {
    Webtoon.findOne({
        where:{id: req.params.id}
    }).then(webtoons=> res.send(webtoons))
}

//Get User Creation
exports.userGetCreation=(req,res) => {
  Webtoon.findAll({
    include: [
      {
        model: User,
        // through: {attributes: []}
      }
    ],
    where: {
      createdBy: req.params.id
    }
  })
  // .then(fav => res.send(fav[0]["webtoons"]))
  .then(fav => res.send(fav))
}

exports.userCreation = (req, res) => {
  Webtoon.create(req.body, req.body.createdBy = req.params.id).then(comics=>res.send(comics))
}


//show data based on id
exports.showWebtoonCreation = (req, res) => {
    Webtoon.findOne({where : {
      id: req.params.webtoonId
    }}).then(webtoons=> res.send(webtoons))
}

//Update data webtoon thens show data after update
exports.updateWebtoonCreation = (req, res) => {
  Webtoon.update(req.body,{where:{id:req.params.webtoonId}})
  .then(()=>Webtoon.findOne({where : {id: req.params.webtoonId}})
  .then(webtoons=> res.send(webtoons)))
}

//delete webtoon based id webtoon
exports.deleteWebtoonCreation = (req, res) => {
  Webtoon.destroy(
  {
    where:{id:req.params.webtoonId}
  }).then(comics=>res.send('Sukses Hapus'))
}
