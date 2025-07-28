import { sequelize } from "../utils/dbHelper.js";
import { readFile } from "node:fs/promises";
import Song from "../models/Song.js";

try {
  await sequelize.authenticate();
  await Song.sync({ force: true });

  const initSongDateString = await readFile("./src/scripts/data.json", "utf-8");

  const data = JSON.parse(initSongDateString);
  console.log("bulkCreate data:", data);
  await Song.bulkCreate(data);
  console.log("✅ 数据写入成功！");
} catch (error) {
  console.log("-----❌ bulkCreate error-----");
} finally {
  sequelize.close();
}
