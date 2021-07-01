const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema; 

const Book = new Schema({
    name: { type: String, required: true, },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, required: true, },
    level: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true },
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now }, mongoose support tự tạo
}, {
    timestamps: true,
});

//Add plugins 
mongoose.plugin(slug);
Book.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all', 
}); 

module.exports = mongoose.model('Book', Book);// mongoose tự đọc để convert thành dạng chữ thường sau đó thêm thành dạng số nhiều
//sau đó suy ra collection của chúng ta => books