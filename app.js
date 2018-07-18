const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fetchData = require('./fetchData');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const port = process.env.PORT || 8080;

fetchData.startApp();

app.get('/get_gallery', (req, res) => {
  const photos = fetchData.getGallery();

  console.log(`API get_gallery request: ${photos.length} items returned`);
  
  if (!photos.length) {
    return res.status(400).json({error: 'No photos returned from server'});
  }
    
  return res.status(200).json(photos);
});

app.listen(port, () =>
  console.log(`API running on port ${port}!`)
);
