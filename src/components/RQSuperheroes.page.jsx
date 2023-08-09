import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const RQSuperHeroes = () => {
  const [refetchTime, setRefetchTime] = useState(3000);
  const getData = async () => {
    return axios.get("http://localhost:8000/superheroes");
  }
  const onSuccess = (data) => {
    if (data.length === 4) {
      setRefetchTime(null);
    }
  };
  const onError = () => {
    console.log('error ygy');
    setRefetchTime(null);
  };
  const { data, isLoading, isError, error, isFetching } = useQuery(
    "superheroes",
    getData,
    {
      refetchInterval: refetchTime,
      onSuccess: () => onSuccess(data),
      onError: onError,
      select: (data) => {
        const superHeroNameOnly = data.data.map(data => data.name);
        return superHeroNameOnly;
      }
    }
  );

  console.log({ isLoading, isFetching }); // this will log the boolean status of isLoading and isFetching when fetch/refetching data from API

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <>
    {/* <button className="p-4 bg-blue-300" onClick={refetch}>See Heroes</button> */}
      {/* {data &&
        data.data.map((data) => {
          return <p key={data.id}>{data.name}</p>;
        })} */}
        { data.map(d => <p key={d}>{ d }</p> ) }
    </>
  );
};

export default RQSuperHeroes;
