import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('/articoli.json');
    return response.data;
  } catch (error) {
    console.error("Failed to fetch data", error);
    return null;
  }
};

export default fetchData;