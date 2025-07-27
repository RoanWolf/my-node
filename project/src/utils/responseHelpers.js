/**
 * Helper functions for standardized API responses
 */

/**
 * Send a standardized success response
 * @param {Object} res - Express response object
 * @param {Object} data - Response data
 * @param {number} [statusCode=200] - HTTP status code
 * @returns {Object} Formatted JSON response
 */
export const successResponse = (res, data, statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    data,
    timestamp: new Date().toISOString()
  });
};

/**
 * Send a standardized error response
 * @param {Object} res - Express response object
 * @param {string} message - Error message
 * @param {number} statusCode - HTTP status code
 * @param {Object} [additionalData={}] - Additional error details
 * @returns {Object} Formatted JSON error response
 */
export const errorResponse = (res, message, statusCode, additionalData = {}) => {
  return res.status(statusCode).json({
    success: false,
    error: message,
    timestamp: new Date().toISOString(),
    ...additionalData
  });
};