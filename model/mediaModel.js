const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({

    title: { type: String, required: true },

    description: { type: String, required: true },

    url: { type: String },

    type: { type: String, required: true },

}, { timestamps: true });

const media = new mongoose.model('Media', mediaSchema);

module.exports = media


