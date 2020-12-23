const THIRTY_MINUTES = 1000 * 60 * 30;
import { DefaultOptions } from 'react-query';

export const defaultOptions: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: THIRTY_MINUTES,
  }
};