import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.static('client/public'));
app.use(express.static('./node_modules/semantic-ui-css'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'))
});

app.listen(PORT, () => {
  console.log('Server is running!');
});
