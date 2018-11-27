var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
    {
        name: { type: Schema.Types.ObjectId, ref: 'Book', required: false}, //reference to the associated book
        url: { type: String, required: false},
        }
);

// Virtual for genre's URL
GenreSchema
    .virtual('url')
    .get(function () {
        return '/catalog/genre/' + this._id;
    });

//Export model
module.exports = mongoose.model('Genre', GenreSchema);