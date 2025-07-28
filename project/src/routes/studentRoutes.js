import {Router} from 'express';
import {getAllStudent} from '../controllers/studentController.js';

const router = Router();

router.get('/student', getAllStudent);

export default router;