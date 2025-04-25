
import express from 'express';
import _ from 'lodash';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Backend!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
