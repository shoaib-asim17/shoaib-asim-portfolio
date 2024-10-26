const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String },
  likes: { type: Number, default: 0 },
  likedBy: { type: [String], default: [] } // Array to track user IDs who liked the project
});

module.exports = mongoose.model('Project', projectSchema);
