import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
const app = express();
app.use(cors);
app.use(express.json());
app.post('/', (req, res) => {
    const { username, password } = req.body; //plaintext

});


app.listen(3000);

