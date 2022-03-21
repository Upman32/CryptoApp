import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query'

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '018df9a76dmsh8570c5e5b0af617p1bd85cjsn4a725b337bc2'
} 
/* var options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  headers: {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_API_KEY
  }
}; */