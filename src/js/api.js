import axios from 'axios';
import Notiflix from 'notiflix';

const API_KEY = '42547031-d44eb5b02e225acf871f5a848';
const BASE_URL = 'https://pixabay.com/api/?';

export async function fetchImages(q) {
  let params = new URLSearchParams({
    q: q,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  try {
    const response = (await axios.get(BASE_URL + params)).data.hits;
    if (response.length === 0) {
      throw new Error();
    }
    Notiflix.Notify.success();
    return response;
  } catch (error) {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return [];
  }
}

export async function fetchMoreImages(q) {
  console.log('More images');
  return await fetchImages(q);
}
