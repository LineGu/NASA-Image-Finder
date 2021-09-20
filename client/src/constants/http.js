import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';

const http = axios.create({
  Accept: 'application/json',
  headers: { 'Cache-Control': 'no-cache, max-age=3600' },
  adapter: cacheAdapterEnhancer(axios.defaults.adapter),
});

export default http;
