import axios from 'axios';
import Notiflix from 'notiflix';

const API_KEY = '42547031-d44eb5b02e225acf871f5a848';
const BASE_URL = 'https://pixabay.com/api/?';

export async function fetchImages(q, page) {
  let params = new URLSearchParams({
    q: q,
    page: page,
    per_page: 40,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  try {
    const response = (await axios.get(BASE_URL + params)).data;
    if (response.hits.length === 0) {
      throw new Error();
    }
    Notiflix.Notify.success(`Hooray! We found ${response.totalHits} images.`);
    return response.hits;
  } catch (error) {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return [];
  }
}

export async function fetchMoreImages(q, page) {
  return await fetchImages(q, page);
}
