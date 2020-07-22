import axios from 'axios'

export const getTodo = async () => {
  try{
    const res = axios.get('/api/todo/')
    return res;

  } catch (err) {
    console.log(err);
  }
}
