import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
} from '../controllers/project.controller.js';

const router = express.Router();

router.post('/create', verifyToken, createProject);
router.get('/getprojects', getProjects);
router.put('/updateproject/:projectId/:userId', verifyToken, updateProject);
router.delete('/deleteproject/:projectId/:userId', verifyToken, deleteProject);

export default router;
