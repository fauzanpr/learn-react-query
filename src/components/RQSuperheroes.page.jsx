import axios from "axios";
import { useQuery } from "react-query";

const RQSuperHeroes = () => {
  const { data, isLoading, isError, error } = useQuery("superheroes", () => {
    return axios.get("http://localhost:8000/superheroes");
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{ error.message }</p>

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
