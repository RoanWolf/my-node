import pageDisplay from '../controllers/pageCotroller.js';

import express from 'express';
const router = express.Router();

router.route('/').get(pageDisplay);
export default router;