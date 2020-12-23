export const getInitialParams = ({ params }: Record<string, any>) => {
  const id = params.id;
  if (typeof id !== 'string') {
    throw new Error('path id must be a string')
  }
  return id;
}