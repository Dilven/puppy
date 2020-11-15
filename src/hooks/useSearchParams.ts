import { useHistory } from "react-router-dom";

export const useSearchParams = () => {
  const history = useHistory();
  const searchParams = new URLSearchParams(history.location.search);
  const name = searchParams.get('q');
  const year = searchParams.get('y');
  // const plot = searchParams.get('plot');
  // const page = searchParams.get('page');
  // const id = searchParams.get('id');

  return { name, year }
  // return { name, year, plot, page, id }
}