import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '46793755-9d28ad9f5c835a0a0339cf9e7';

export async function getImages(query, page, perPage) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: perPage,
      page,
    },
  });

  return response.data;
}
