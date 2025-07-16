import {readFile,writeFile} from 'node:fs/promises';

const res = await readFile('./data.txt','utf-8');
const numMove = await readFile('./keyChain.txt','utf-8');

const ans  = res.split('').map((curChar)=>{
    const curCharCode = curChar.charCodeAt(0);
    return  String.fromCharCode(curCharCode -numMove);
}).join('')

await writeFile('./code.txt' , ans , 'utf-8');
