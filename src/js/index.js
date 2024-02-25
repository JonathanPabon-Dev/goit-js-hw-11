import { fetchImages, fetchMoreImages } from './api.js';
import Card from './card.js';

const form = document.getElementById('searchForm');
const gallery = document.querySelector('.gallery');
gallery.style.maxWidth = '1440px';

form.addEventListener('submit', async e => {
  e.preventDefault();
  let q = e.target.elements['searchForm'].value;
  if (q.trim() === '') {
    return;
  }
  let data = await fetchImages(q);
  data.forEach(image => {
    const card = new Card(image);
    gallery.appendChild(card.newCard());
  });
});
