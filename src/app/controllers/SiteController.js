const Book = require('../models/Book');
const { multipleMongooseToObject } = require('../../util/mongoose')

class SiteController{
    // [GET] /news
    index(req, res, next){
    //     Book.find({}, function(err, books){
    //         if(!err){ 
    //             res.json(books);
    //         }else{
    //         //res.status(400).json({ error: 'EROR!!!' }); 
    //             next(err);
    //         }
    //     });

        Book.find({})
            .then(books => {
                // books = books.map(books => books.toObject())
                res.render('home',{ 
                    books: multipleMongooseToObject(books)
                });
            })
            .catch(next);

        // res.render('home');
    }

    // [GET] /news/:slug
    search(req, res){
        res.render("search");
    }
}

module.exports = new SiteController;