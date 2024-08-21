const httpStatus: {[x: string]: number} = {
  SUCCESSFUL: 200,
};

// INVALID_KEYS' |
// 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'CONFLICT';

export const mapHttpStatus = (status: string) => httpStatus[status];