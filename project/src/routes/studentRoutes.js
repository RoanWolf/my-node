import { Router } from "express";
import { getAllStudent } from "../controllers/studentController.js";
import { getAllSong } from "../controllers/songController.js";
const router = Router();

router.get("/student", getAllStudent);
router.get("/song", getAllSong);
export default router;
