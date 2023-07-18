import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { Label } from "../interfaces/label";
import { sleep } from "../../helpers/sleep";

const getLabels = async (): Promise<Label[]> => {
  await sleep(2);
  const { data } = await githubApi.get<Label[]>("/labels");
  return data;
};

export const useLabels = () => {
  const labelsQuery = useQuery(["labels?per_page=100"], getLabels, {
    // staleTime: 1000 * 60 * 60,
    // placeholderData:[] ,initialData: []
    placeholderData: [
      {
        id: 1757816973,
        node_id: "MDU6TGFiZWwxNzU3ODE2OTcz",
        url: "https://api.github.com/repos/facebook/react/labels/dependencies",
        name: "dependencies",
        color: "0366d6",
        default: false,
      },
      {
        id: 1109407645,
        node_id: "MDU6TGFiZWwxMTA5NDA3NjQ1",
        url: "https://api.github.com/repos/facebook/react/labels/Component:%20Suspense",
        name: "Component: Suspense",
        color: "8ffcd6",
        default: false,
      },
    ],
  });

  return labelsQuery;
};
