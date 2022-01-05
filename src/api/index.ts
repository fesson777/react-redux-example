import { AxiosResponse, AxiosError } from 'axios';
import type {
  AuthReq,
  AuthResponse,
  SuccessResponse,
  ErrorResponse,
  Post,
  User,
} from './types';
import { request } from './axios';

function isAxiosError( //type guard
  error: unknown | AxiosError
): error is AxiosError<{ message: string }> {
  if (
    typeof error === 'object' &&
    (error as Object).hasOwnProperty('isAxiosError')
  ) {
    return true;
  }
  return false;
}

export async function getPosts() {
  const response: AxiosResponse<Post[]> = await request.get('/posts');
  console.debug('API ~ getPosts ~ response.data', response.data);
  return response.data;
}

export async function getUsers() {
  const response = await request.get<User[]>('/users');
  console.debug('API ~ getUsers ~ response.data', response.data);
  return response.data;
}

export async function getAuth(
  payload: AuthReq
): Promise<SuccessResponse<AuthResponse> | ErrorResponse> {
  try {
    const response: AxiosResponse<AuthResponse> = await request.post(
      '/auth',
      payload
    );
    console.debug('API ~ auth ~ response.data', response.data);
    return {
      ok: true,
      data: response.data,
    };
  } catch (error) {
    console.error('API ~ auth ~', error);
    if (isAxiosError(error)) {
      const { message, response } = error;
      console.error('API ~ auth ~ error.response', response);
      return {
        ok: false,
        status: response?.status,
        message: response?.data?.message || message,
      } as ErrorResponse;
    }
    return {
      ok: false,
      message: String(error),
    } as ErrorResponse;
  }
}
