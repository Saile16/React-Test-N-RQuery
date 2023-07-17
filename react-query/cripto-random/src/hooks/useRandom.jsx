import { useQuery } from "@tanstack/react-query";
const getRandomNumberFromApi = async () => {
  const res = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new"
  );
  const numberString = await res.text();
  // throw new Error("Auxilio");
  return +numberString;
};

const useRandom = () => {
  const query = useQuery(["randomNumber"], getRandomNumberFromApi);

  return query;
};

export default useRandom;
