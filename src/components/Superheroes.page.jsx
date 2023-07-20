import axios from "axios";
import { useEffect, useState } from "react";

const Superheroes = () => {
  const [superheroes, setSuperheroes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    setIsLoading(true);
    const res = await axios.get("http://localhost:8000/superheroes");
    if (res.status !== 200) {
      console.log(new Error("ERROR while fething data"));
      return false;
    }
    setSuperheroes(res.data);
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  if (isLoading) return <p>Loading...</p>

  return (
    <>
      <h1>The Superheroes</h1>
      <ul>
        {superheroes &&
          superheroes.map((superhero) => {
            return <li key={superhero.id}>{superhero.name}</li>;
          })}
      </ul>
    </>
  );
};

export default Superheroes;
