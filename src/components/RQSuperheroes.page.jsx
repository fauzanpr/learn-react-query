import axios from "axios";
import { useQuery } from "react-query";

const RQSuperHeroes = () => {
  const getData = async () => {
    return axios.get("http://localhost:8000/superheroes");
  }
  const { data, isLoading, isError, error, isFetching, refetch } = useQuery(
    "superheroes",
    getData,
    {
      enabled: false
    }
  );

  console.log({ isLoading, isFetching }); // this will log the boolean status of isLoading and isFetching when fetch/refetching data from API

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <>
    <button className="p-4 bg-blue-300" onClick={refetch}>See Heroes</button>
      {data &&
        data.data.map((data) => {
          return <p key={data.id}>{data.name}</p>;
        })}
    </>
  );
};

export default RQSuperHeroes;
