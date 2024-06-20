import Project from '../models/project.model.js';
import errorHandler from '../utils/error.js';
const slugify = (title) => {
  return title
    .split(' ')
    .join('-')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, '');
};

export const createProject = async (req, res, next) => {
  // Ensure the user is an admin
  if (!req.user.isAdmin) {
    return next(errorHandler(403, 'You are not authorized to create a project'));
  }

  // Check for all required fields
  const requiredFields = [
    'title', 'type', 'techStack', 'about',
    'liveLink', 'githubLink', 'image', 'learnings'
  ];

  for (const field of requiredFields) {
    if (!req.body[field]) {
      return next(errorHandler(400, 'Please provide all required fields'));
    }
  }

  // Generate unique slug from title
  let slug = slugify(req.body.title);
  let slugExists = await Project.findOne({ slug });

  // If slug already exists, generate a new unique slug
  let count = 1;
  while (slugExists) {
    slug = slugify(req.body.title) + '-' + count;
    slugExists = await Project.findOne({ slug });
    count++;
  }

  // Create new project object
  const newProject = new Project({
    ...req.body,
    slug,
    userId: req.user.id,
  });

  try {
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    // Check if the error is due to duplicate key (slug)
    if (error.code === 11000 && error.keyPattern && error.keyPattern.slug === 1) {
      // Handle duplicate slug error
      return next(errorHandler(400, 'A project with this title already exists. Please choose a different title.'));
    }
    next(error);
  }
};

export const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find({
      ...(req.query.userId && { userId: req.query.userId }),
    });
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};

export const updateProject = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to update this project'));
  }
  try {
    const updatedProject =await Project.findByIdAndUpdate(
      req.params.projectId,
      {
        $set: {
         ...req.body, // This should update all fields sent in the request
        },
      },
      { new: true }
    )
    res.status(200).json(updatedProject);
  } catch (error) {
    next(error);
  }

};

export const deleteProject = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to delete this project'));
  }
  try{
    await Project.findByIdAndDelete(req.params.projectId);
    res.status(200).json('Project has been deleted');
  }catch(error){
    next(error)
  }
};