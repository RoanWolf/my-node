import { getStudentById } from '../services/studentService.js';
import { successResponse, errorResponse } from '../utils/responseHelpers.js';

/**
 * @desc    Get student by ID
 * @route   GET /api/students
 * @access  Public
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} JSON response with student data or error message
 */
export const getStudent = async (req, res) => {
  try {
    const { id } = req.query;

    // Call service layer using validated ID from middleware
    const student = await getStudentById(req.studentId);

    if (!student) {
      return errorResponse(res, 'Student not found', 404, { requestedId: validation.studentId });
    }

    return successResponse(res, student);
  } catch (error) {
    console.error('Controller error:', error);
    return errorResponse(res, 'Server error', 500);
  }
};