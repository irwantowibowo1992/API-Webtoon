const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = Number(process.env.PORT || 3000)


app.use(bodyParser.json())

//controllers
const AuthController = require('./controllers/auth')
//middlewares
const { authenticated } = require('./middleware')
//user
const UserController = require('./controllers/user')
//Webtoon
const WebtoonController = require('./controllers/webtoon')
//DetailWebtoon
const DetailWebtoonController = require('./controllers/detailwebtoon')
//Page Controller
const PageController = require('./controllers/page')
//Favorite
const FavoriteController = require('./controllers/favorite')

app.group("/api/v1", (router) => {
        //auth API
        router.post('/login', AuthController.login)
        router.post('/register', AuthController.register)

        //Webtoons
        router.get('/webtoons', WebtoonController.index)
        router.get('/webtoon/:id', WebtoonController.show)
        router.get('/user/:id/webtoons', authenticated, WebtoonController.userGetCreation)
        router.post('/user/:id/webtoon', authenticated, WebtoonController.userCreation)
        router.get('/user/:id/webtoon/:webtoonId', authenticated, WebtoonController.showWebtoonCreation)
        router.put('/user/:userId/webtoon/:webtoonId', authenticated, WebtoonController.updateWebtoonCreation)
        router.delete('/user/:userId/webtoon/:webtoonId', authenticated, WebtoonController.deleteWebtoonCreation)

        // router.post('/user/:userId/comic/:comicId/episode', authenticated, DetailWebtoonController.createDetailWebtoon)

        //DetailWebtoon
        router.get('/webtoon/:id/detailwebtoons', DetailWebtoonController.index)
        router.get('/webtoon/:id/detailwebtoon/:idDetail', DetailWebtoonController.show)
        router.get('/user/:id/webtoon/:webtoonId/detailwebtoons', authenticated, DetailWebtoonController.showDetailWebtoonCreation)
        router.get('/user/:id/webtoon/:webtoonId/detailwebtoon/:idDetail', authenticated, DetailWebtoonController.spesificDetailWebtoonCreation)
        router.post('/user/:id/webtoon/:webtoonId/detailwebtoon', authenticated, DetailWebtoonController.createDetailWebtoonCreation)
        router.put('/user/:userId/webtoon/:webtoonId/detailwebtoon/:detailId', authenticated, DetailWebtoonController.updateDetailWebtoon)
        router.delete('/user/:userId/webtoon/:webtoonId/detailwebtoon/:detailId', authenticated, DetailWebtoonController.deleteDetailWebtoon)
        router.post('/user/:userId/webtoon/:webtoonId/detailwebtoon/:detailId/image', authenticated, PageController.createImageDetail)
        router.delete('/user/:userId/webtoon/:webtoonId/detailwebtoon/:detailId/image/:imageId', authenticated, PageController.deleteImageDetail)
        // router.get('/user/:id/webtoon/:webtoonId/detailwebtoon/:detailId', authenticated, DetailWebtoonController.spesificDetailWebtoonCreation)

        //Detail Webtoon by id detail (page)
        router.get('/webtoon/:id/detailwebtoon/:detailwebtoonId/pages', DetailWebtoonController.pagesDetail)
        router.get('/pages', PageController.index)
        //Favorite
        router.get('/fav', FavoriteController.myFavorite)
        router.get('/fav/:userId', FavoriteController.userFavorite)
        // router.get('/webtoons/favorite/:userId', authenticated, FavoriteController.userFavorite)
        router.get('/users', UserController.index)
        router.get('/user/:id', UserController.show)


    }
)



app.listen(port, () => console.log(`Listening on port ${port}!`))
