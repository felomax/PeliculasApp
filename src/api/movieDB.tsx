import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '30a8be235e02602919e1c88bcd47ecb5',
    language: 'es-ES',
  }
})

export default movieDB;