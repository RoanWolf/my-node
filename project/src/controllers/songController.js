import Song from "../models/Song.js";
export const getAllSong = async (req, res) => {
    const students = await Song.findAll();
    res.status(200).json(students);
};      