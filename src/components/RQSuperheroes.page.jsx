import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const RQSuperHeroes = () => {
  const { data, isLoading } = useQuery("superheroes", () => {
    return axios.get("http://localhost:8000/superheroes");
  });

  if (isLoading) return <p>Loading...</p>;

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
