import express from 'express';

const app = express();
const port = 3000;

app.get('/:id', (req, res) => {
  console.log(req.params.id)  
  res.status(200).send('<h1>This is the Main Page</h1>');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});