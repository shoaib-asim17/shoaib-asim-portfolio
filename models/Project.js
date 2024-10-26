import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    likes: { type: Number, default: 0 },
    likedBy: { type: [String], default: [] }, // Array of user IDs who liked the project
    // Add other fields as needed
});

// Ensure you're exporting the model as default
const Project = mongoose.model('Project', projectSchema);
export default Project; // This line is crucial for default export
