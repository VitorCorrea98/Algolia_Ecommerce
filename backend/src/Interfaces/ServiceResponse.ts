export type ServiceMessage = { message: string };

type ServiceResponseErrorType = 'INVALID_KEYS' |
'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'CONFLICT';

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: ServiceMessage
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL',
  data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;