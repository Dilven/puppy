const THIRTY_MINUTES = 1000 * 60 * 30;

export const cacheConfig = {
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: THIRTY_MINUTES,
    }
  }
}