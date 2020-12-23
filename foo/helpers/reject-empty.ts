import { reject, isEmpty, isNil } from 'ramda';

export const rejectEmpty = (data: Record<string, any>) => {
  return reject(isNil)(reject(isEmpty)(data));
}