const newsRouter = require('./news');
const meRouter = require('./me');
const booksRouter = require('./books');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/books', booksRouter);
    app.use('/', siteRouter);
}

module.exports = route;
