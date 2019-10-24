const models = require('../models')
const Page = models.page
const Webtoo = models.webtoon

// show all episode
exports.index = (req, res) => {
    Page.findAll().then(pages=>res.send(pages))
}

//show all page based on webtoonId
exports.show = (req, res) => {
    // detailwebtoonId = req.params.id
    Page.findAll({where: { detailwebtoonId: req.params.detailWebtoonid}}).then(pages=>res.send(pages))
}

exports.createImageEpisode = (req, res) => {
  Page.create(
    {
      title: req.body.title,
      image: req.body.image,
      detailId: req.params.detailId
    }
  ).then(pages=> res.send(pages))
}

exports.createImageDetail = (req, res) => {
  Page.create({
      detailwebtoonId: req.params.detailId,
      title:req.body.title,
      image:req.body.image
  }).then((data)=>res.send(data))
}

exports.deleteImageDetail = (req, res) => {
  Page.destroy(
  {
    where:{id:req.params.imageId}
  }).then(comics=>res.send('Sukses Hapus'))
}
