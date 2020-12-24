const NOT_FOUND_ERROR_TYPE = 'NotFoundError';
const SERVER_ERROR_TYPE = 'ServerError';
const BAD_REQUEST_ERROR_TYPE = 'BadRequestError';

export class UserReadableError extends Error {
  readableByEndUser: boolean;

  constructor(...args: any) {
    super(...args);
    this.readableByEndUser = true;
  }
}

export class NotFoundError extends UserReadableError {
  type: typeof NOT_FOUND_ERROR_TYPE;

  constructor(...args: any) {
    super(...args);
    this.type = NOT_FOUND_ERROR_TYPE;
  }
}

export class BadRequestError extends UserReadableError {
  type: typeof BAD_REQUEST_ERROR_TYPE;

  constructor(...args: any) {
    super(...args);
    this.type = BAD_REQUEST_ERROR_TYPE;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class ServerError extends UserReadableError {
  type: typeof SERVER_ERROR_TYPE;

  constructor(...args: any) {
    super(...args);
    this.type = SERVER_ERROR_TYPE;
  }
}
