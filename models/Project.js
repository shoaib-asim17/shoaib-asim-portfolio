import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techs: [String],
  img: { type: String, required: true },
  link: { type: String, required: true },
  likes: { type: Number, default: 0 },
  likedBy: [{ type: String }] // Array of user IDs who liked the project
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
