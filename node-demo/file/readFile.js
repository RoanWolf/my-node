import {  } from 'node:fs/promises';
import { readFile } from 'node:fs';
const url = "./data.json"; 
readFile(url, 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err.message);
    } else {
        console.log(data);
    }
});