class NewsController{

    // [GET] /news
    index(req, res){
        res.render('news');
    }

    // [GET] /news/:slug
    show(req, res){
        res.send("NEWS DETAIL!!!");
    }
}

module.exports = new NewsController;

//vi du export
//const newController = require('./NewsController')