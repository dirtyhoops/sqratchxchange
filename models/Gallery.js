const mongoose = require('mongoose');

const GallerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: String,
    required: true
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
});

module.exports = Gallery = mongoose.model('gallery', GallerySchema);
