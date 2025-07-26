import { readFile } from 'node:fs/promises';


export default async function pageDisplay(req, res) {
    const data = await readFile('./data.json', 'utf8');
    if(data){
        return res.status(200).send(JSON.parse(data));
    }
    return res.status(404).send({ message: 'Data not found' });
};