import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImages } from './js/pixabay-api.js';
import { createMarkup, showErrorMsg } from './js/render-functions.js';
import { onTopBtn } from './js/on-top-btn.js';

const form = document.querySelector('.search-form');
const input = document.querySelector('input[name="query"]');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.load-more');

const simpleLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
const perPage = 15;
let page = 1;
let query = '';

loadMore.style.display = 'none';
loader.style.display = 'none';

onTopBtn();

form.addEventListener('submit', onSearch);
loadMore.addEventListener('click', onLoadMore);

async function onSearch(event) {
  event.preventDefault();
  query = input.value.trim();

  if (!query) {
    return showErrorMsg('Please enter a search query!');
  }

  gallery.innerHTML = '';
  loader.style.display = 'block';

  try {
    const data = await getImages(query, page, perPage);

    if (!data.hits.length) {
      return showErrorMsg(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }

    if (data.hits.length < 15) {
      loadMore.style.display = 'none';
    } else {
      loadMore.style.display = 'block';
    }

    gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
    simpleLightbox.refresh();
  } catch (error) {
    showErrorMsg('Sorry, but something went wrong!');
  } finally {
    loader.style.display = 'none';
    form.reset();
  }
}

async function onLoadMore() {
  page += 1;
  loadMore.style.display = 'none';
  loader.style.display = 'block';

  try {
    const data = await getImages(query, page, perPage);
    gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
    simpleLightbox.refresh();

    const galleryCard = document.querySelector('.gallery-item');
    if (galleryCard) {
      const cardSize = galleryCard.getBoundingClientRect().height;
      window.scrollBy({
        top: cardSize * 2,
        left: 0,
        behavior: 'smooth',
      });
    }

    if (data.totalHits <= Math.ceil(page * perPage)) {
      showErrorMsg(
        `We're sorry, but you've reached the end of search results.`
      );
    } else {
      loadMore.style.display = 'block';
    }
  } catch (error) {
    showErrorMsg('Sorry, but something went wrong!');
  } finally {
    loader.style.display = 'none';
  }
}
