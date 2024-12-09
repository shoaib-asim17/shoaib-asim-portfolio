const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String }, 
  githubLink: { type: String }, 
  likes: { type: Number, default: 0 }, 
  likedBy: { type: [String], default: [] }, 
});

module.exports = mongoose.model('Project', projectSchema);
