require('isomorphic-fetch');

exports.startApp = () => fetchFlickrGallery();
exports.getGallery = () => returnStatePhotos(state.photos);

const returnStatePhotos = state => state;

const state = {
  photos: []
}

//const galleryId = '72157667840423149'; // Black & White Gallery
const galleryId = '72157684821852535'; // Sea Gallery
const apiKey = '8075182d5e728fdd009062b22992058a';
const baseUrl = 'https://api.flickr.com/services/rest';

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  
  return Promise.reject(new Error(response.statusText));
}

function json(response) {
  return response.json();
}

function updateState(data) {
  state.photos.push(data.photo);
}

function error(error) {
  console.log('Request failed', error);
}

function fetchFlickrGallery() {
  fetch(`${baseUrl}/?method=flickr.galleries.getPhotos&api_key=${apiKey}&gallery_id=${galleryId}&format=json&nojsoncallback=1`)
    .then(status)
    .then(json)
    .then(getInfo)
    .catch(error)
}

function getInfo(data) {
  data.photos.photo.map(photo => {
    fetch(`${baseUrl}/?method=flickr.photos.getInfo&api_key=${apiKey}&photo_id=${photo.id}&secret=${photo.secret}&format=json&nojsoncallback=1`)
      .then(status)
      .then(json)
      .then(updateState)
      .catch(error)
  });
}
