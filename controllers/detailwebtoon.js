const models = require('../models')
const DetailWebtoon = models.detailwebtoon
const Webtoon = models.webtoon
const Page = models.page
const User = models.user

exports.index=(req,res) => {
    DetailWebtoon.findAll({
        include:[{
            model: Webtoon,
            // as: "createdBy"
            where: {
              id: req.params.id
            }
        }]
    }).then(detailwebtoon => res.send(detailwebtoon))
}

//show all episode based on webtoonId
exports.show = (req, res) => {
    webtoonId = req.params.id

    DetailWebtoon.findOne({where: {id: webtoonId}}).then(details=>res.send(details))
}

//show all episode based on webtoonId and userId
exports.showDetailWebtoonCreation = (req, res) => {
    webtoonId = req.params.id

    DetailWebtoon.findAll({
        include:[{
            model:Webtoon,
            // attributes:[],
            where:{
                id:req.params.webtoonId
            }
        }]
    })
    .then(webtoons=>res.send(webtoons))
}

//show all episode based on webtoonId and userId
exports.spesificDetailWebtoonCreation = (req, res) => {
    // webtoonId = req.params.idDetail

    DetailWebtoon.findOne({
        include:[{
            model:Webtoon,
            // attributes:[],
            where:{
                id:req.params.idDetail
            }
        }]
    })
    .then(webtoons=>res.send(webtoons))
}

// Create Detail Webtoons
exports.createDetailWebtoonCreation=(req,res) => {
  DetailWebtoon.create({title: req.body.title, image: req.body.image, webtoonId: req.params.webtoonId}).then(details=> res.send(details))
}

//show all Image Detail Webtoon
// exports.showAllImageDetailWebtoon = (req, res) => {
//     detailwebtoonId = req.params.detailId
//
//     Page.findAll({
//         include:[{
//             model:DetailWebtoon,
//             // attributes:[],
//             where:{
//                 id:req.params.detailwebtoonId
//             }
//         }]
//     })
//     .then(webtoons=>res.send(webtoons))
// }

exports.pagesDetail=(req,res) => {
    Page.findAll({
        include:[{
            model:DetailWebtoon,
            attributes:[],
            where:{
                webtoonId:req.params.id,
                id:req.params.detailwebtoonId
            }
        }]
    })
    .then(webtoons=>res.send(webtoons))
    .catch((e)=>{
      console.log(e)
    })
}


//Edit Detail Webtoon
exports.updateDetailWebtoon = (req, res) => {
  DetailWebtoon.update(req.body,{where:{id:req.params.detailId}})
  .then(webtoons => res.send('Sukses Ubah Data'))
}

//Delete Detail Webtoon
exports.deleteDetailWebtoon = (req, res) => {
  DetailWebtoon.destroy(
  {
    where:{id:req.params.detailId}
  }).then(comics=>res.send('Sukses Hapus'))
}
