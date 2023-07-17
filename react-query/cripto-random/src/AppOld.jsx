import { useEffect, useReducer, useState } from "react";
import "./App.css";

const getRandomNumberFromApi = async () => {
  const res = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  );
  const numberString = await res.text();
  // throw new Error("Auxilio");

  return +numberString;
};

function App() {
  const [number, setNumber] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [key, forceRefetch] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    setIsLoading(true);
    getRandomNumberFromApi()
      .then(setNumber)
      .catch((error) => setError(error.message));
  }, [key]);

  useEffect(() => {
    if (number) setIsLoading(false);
  }, [number]);

  useEffect(() => {
    if (error) setIsLoading(false);
  }, [error]);

  return (
    <>
      {isLoading ? (
        <h2>Cargando ....</h2>
      ) : (
        <h2>Numero aleatorio: {number} </h2>
      )}
      {!isLoading && error && <h3>{error}</h3>}

      <button onClick={forceRefetch} disabled={isLoading}>
        Nuevo número
      </button>
    </>
  );
}

export default App;
