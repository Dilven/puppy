import { useRouter } from 'next/router'

export const useQueryId = () => {
  const router = useRouter()
  const { id } = router.query
  if (typeof id !== 'string') {
    throw new Error('path id must be a string')
  }
  return id;
}