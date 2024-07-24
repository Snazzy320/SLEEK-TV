const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    media_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }]
}, { timestamps: true });

const Genre =new mongoose.model('Genre', genreSchema);
module.exports = Genre;
