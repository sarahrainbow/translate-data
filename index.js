import express from 'express';
import { dataParser } from './dataParser.js'

const app = express();
const PORT = 8080;

const jsonParser = express.json();

app.use(jsonParser);

app.post('/translate', jsonParser, (req, res) => {
  try {
    res.send(dataParser(req.body));
  }
  catch {
    res.status(400).send('Invalid JSON string');
  }
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

