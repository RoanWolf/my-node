/**
 * Student validation middleware
 * @module middleware/studentValidation
 */

/**
 * Validates student ID parameter from request query
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {void}
 */
export const validateStudentId = (req, res, next) => {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({
      success: false,
      error: 'ID parameter is required',
      timestamp: new Date().toISOString()
    });
  }

  const studentId = parseInt(id, 10);
  if (isNaN(studentId)) {
    return res.status(400).json({
      success: false,
      error: 'ID must be a valid number',
      timestamp: new Date().toISOString()
    });
  }

  // Attach validated ID to request object for controller use
  req.studentId = studentId;
  next();
};