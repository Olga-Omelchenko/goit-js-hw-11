import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.elements['search-text'];
const loader = document.querySelector('.loader');


form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) {
    iziToast.error({ message: 'Please enter a search query!' });
    return;
  }

  clearGallery();
  showLoader(loader);

  try {
    const data = await getImagesByQuery(query);
    hideLoader(loader);

    if (data.hits.length === 0) {
      iziToast.warning({
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      createGallery(data.hits);
    }
  } catch (error) {
    hideLoader(loader);
    iziToast.error({ message: 'An error occurred while fetching images.' });
    console.error(error);
  }
});

