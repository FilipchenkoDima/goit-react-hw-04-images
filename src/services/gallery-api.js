import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const BASE_KEY = '31282131-4e4d9489159d462cf4c23243b';

export const fetchPictures = async (value, page = 1) => {
  try {
    const options = {
      key: BASE_KEY,
      q: value,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page,
      per_page: 12,
    };

    const response = await axios.get(BASE_URL, {
      params: options,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
