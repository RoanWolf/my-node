import express from 'express';
import { getStudent } from '../controllers/studentController.js';
import { validateStudentId } from '../middleware/studentValidation.js';
const router = express.Router();

/**
 * @route   GET /api/students
 * @desc    Get student by ID
 * @access  Public
 */
router.route('/students').get(validateStudentId, getStudent);

export default router;