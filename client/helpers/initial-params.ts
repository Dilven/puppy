import { GetStaticProps } from "next";

export const initialParams: GetStaticProps = async ({ params }) => {
  const id = params.id;
  return {
     props: { id }
  }
}