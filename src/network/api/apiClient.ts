import axios from 'axios';

import { API_URL } from 'src/network/constants/config';

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
