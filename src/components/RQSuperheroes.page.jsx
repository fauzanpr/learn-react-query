import axios from "axios";
import { useQuery } from "react-query";

const RQSuperHeroes = () => {
  const getData = async () => {
    return axios.get("http://localhost:8000/superheroes");
  }
  const { data, isLoading, isError, error, isFetching } = useQuery(
    "superheroes",
    getData,
    {
      staleTime: 10000
    }
  );

  console.log({ isLoading, isFetching }); // this will log the boolean status of isLoading and isFetching when fetch/refetching data from API

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <>
      {data &&
        data.data.map((data) => {
          return <p key={data.id}>{data.name}</p>;
        })}
    </>
  );
};

export default RQSuperHeroes;
