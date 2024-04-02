import axios from 'axios';

const API_URL = 'https://estate-comparison.codeboot.cz/list.php';

export const fetchProperties = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};