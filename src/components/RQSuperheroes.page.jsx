import { useState } from "react";
import useGetSuperheroes from "../hooks/useGetSuperheroes";

const RQSuperHeroes = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const onSuccess = () => {
    console.log("masuk ke sukses");
  };
  const onError = () => {
    console.log("error ygy");
  };

  const btnClickHandler = () => {
    setIsEnabled(true);
  };

  const { data, isLoading, isFetching, error, isError } = useGetSuperheroes(
    onSuccess,
    onError,
    isEnabled
  );

  console.log({ isLoading, isFetching }); // this will log the boolean status of isLoading and isFetching when fetch/refetching data from API

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <>
      <button className="hover:underline" onClick={btnClickHandler}>Klik untuk melihat superhero</button>
      {data && data.map((data) => (
        <p key={data}>{data}</p>
      ))}
    </>
  );
};

export default RQSuperHeroes;
