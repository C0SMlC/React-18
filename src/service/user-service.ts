import apiClient from './api-client';

export interface type {
  id: number;
  name: string;
}

class userService {
  getAllUsers() {
    const controller = new AbortController();

    const request = apiClient.get<type[]>(
      'https://jsonplaceholder.typicode.com/users',
      {
        signal: controller.signal,
      }
    );

    return { request, cancel: () => controller.abort() };
  }
}

export default new userService();
