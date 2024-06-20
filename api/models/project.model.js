import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  techStack: {
    type: [String],
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  liveLink: {
    type: String,
    required: false,
  },
  githubLink: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  learnings: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true, // Ensure uniqueness
    required: true,
  },
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);

export default Project;
