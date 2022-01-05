export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type ErrorResponse = {
  ok: false;
  status?: number;
  message: string;
};

export type SuccessResponse<T> = {
  ok: true;
  data: T;
};

export type AuthReq = {
  login: string;
  password: string;
};

export type AuthResponse = {
  token: string,
  username: string
};
