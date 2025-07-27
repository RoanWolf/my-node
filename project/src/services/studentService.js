// services/studentService.js
import { Student } from "../db/index.js";

export async function getStudentById(id) {
  return await Student.findByPk(id);
}