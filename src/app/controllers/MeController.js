const Book = require('../models/Book');
const { multipleMongooseToObject } = require('../../util/mongoose')

class MeController{
    // [GET] /me/stored/books
    storedBooks(req, res, next){

        Promise.all([Book.find({}), Book.countDocumentsDeleted()])
            .then(([books, deletedCount]) => res.render('me/stored-books',{
                deletedCount : 2,
                books: multipleMongooseToObject(books),
            }))
            .catch(next);

        Book.countDocumentsDeleted()
            .then((deletedCount) => {

            }) 
            .catch(() => {});

        Book.find({})
            .then(books => res.render('me/stored-books',{
                books: multipleMongooseToObject(books)
            }))
            .catch(next);
    }

    // [GET] /me/trash/books
    trashBooks(req, res, next){
        Book.findDeleted({})
            .then(books => res.render('me/trash-books',{
                books: multipleMongooseToObject(books)
            }))
            .catch(next);
    }
}

module.exports = new MeController;