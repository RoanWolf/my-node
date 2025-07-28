import Student from "../models/Student.js";
export const getAllStudent = async (req, res) => {
    const students = await Student.findAll();
    res.status(200).json(students);
};      