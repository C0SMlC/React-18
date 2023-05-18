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

  deleteUser(id: number) {
    return apiClient.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  createUser(user: type) {
    return apiClient.post('/users', user);
  }

  updateUser(user: type) {
    return apiClient.patch(`/users/${user.id}`, user);
  }
}

export default new userService();
