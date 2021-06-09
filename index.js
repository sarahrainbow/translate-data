import express from 'express';
import { dataParser, data } from './dataParser.js'

const app = express();
const PORT = 8080;

const jsonParser = express.json();

app.use(jsonParser);

app.get('/', jsonParser, (req, res) => {
  res.send(dataParser(data));
} );

app.post('/translate', jsonParser, (req, res) => {
  try {
    res.send(dataParser(req.body));
  }
  catch {
    res.status(400).send('Invalid JSON string');
  }
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

