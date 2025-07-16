import { createInterface } from "node:readline/promises";
import {} from "node:"
import { stdin as input , stdout as output } from 'node:process'
const readline = createInterface({input , output});

const ans1 = await readline.question("请输入：");
const ans2 = await readline.question("请输入：");
const ans3 = await readline.question("请输入：");

readline.close();