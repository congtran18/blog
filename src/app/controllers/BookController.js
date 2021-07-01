const Book = require('../models/Book');
const { mongooseToObject } = require('../../util/mongoose')

class BookController{

    // [GET] /books
    show(req, res, next){
        Book.findOne({ slug: req.params.slug })
            .then(book => 
                res.render('books/show', { book: mongooseToObject(book) })
            )
            .catch(next);
    }

    // [GET] /books/create
    create(req, res, next){
        res.render('books/create');
    }

    // [POST] /books/store
    store(req, res, next){
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`;
        const book = new Book(formData);
        book.save()
            .then(() => res.redirect('/me/stored/books'))
            .catch(error => {

            });

    }

    // [GET] /books/:id/edit
    edit(req, res, next){
        Book.findById(req.params.id)
            .then(book => res.render('books/edit', {
                book: mongooseToObject(book)
            }))
            .catch(next);
    }

    // [PUT] /books/:id 
    update(req, res, next){
        Book.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/books'))
            .catch(next);
    }

    // [DELETE] /books/:id 
    delete(req, res, next){
        Book.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /books/:id/force
    forceDelete(req, res, next){
        Book.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /books/:id/restore 
    restore(req, res, next){
        Book.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [POST] /books/handle-form-actions
    handleFormActions(req, res, next){
        switch(req.body.action){
            case 'delete':
                Book.delete({ _id: { $in: req.body.bookIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: 'Action is invalid! '});

        }
    }
}

module.exports = new BookController;

//vi du export
//const newController = require('./NewsController')