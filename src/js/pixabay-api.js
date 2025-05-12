import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const params = {
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export function getImagesByQuery(query) {
  return axios('', {
    params: {
    q: query,
    key: '50250137-e72b1c1fd22aec0efc68e5be3',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    },
  })
  .then(res => res.data)
  .catch(error => error);
}
  
