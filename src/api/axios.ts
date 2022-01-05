import type { AuthReq, AuthResponse, ErrorResponse } from 'api/types';
import axios, { AxiosRequestConfig } from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { USE_MOCKS } from './config';

export const request = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

if (USE_MOCKS) {
  const mock = new AxiosMockAdapter(request, {
    delayResponse: 1000,
    onNoMatch: 'passthrough',
  });

  mock
    .onPost('/auth')
    // .networkErrorOnce()
    // .onPost('/auth')
    // .replyOnce(500)
    // .onPost('/auth')
    .reply((config: AxiosRequestConfig) => {
      const req: AuthReq = JSON.parse(config.data);

      if (req.login.length < 5) {
        const response = {
          message: 'Длина логина не можеть быть меньше 5 символов',
        };
        return [400, response];
      }

      const response: AuthResponse = { token: 'token', username: 'good_user' };
      return [200, response];
    });
}
