import axios, { CanceledError, AxiosError } from 'axios';

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  //   headers: {
  //     'api-key': 'my-api-key',
  //   },
});

export { CanceledError };
