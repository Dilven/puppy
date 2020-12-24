import { reject, isEmpty, isNil } from 'ramda';

export const rejectEmpty = (data: Record<string, any>) => reject(isNil)(reject(isEmpty)(data));
