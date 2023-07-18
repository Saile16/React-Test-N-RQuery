import { githubApi } from "../../api/githubApi";
import { useQuery } from "@tanstack/react-query";
import { Issue, State } from "../interfaces/issue";
import { sleep } from "../../helpers/sleep";

interface Props {
  state?: State;
  labels: string[];
}

const getIssues = async (labels: string[], state?: State): Promise<Issue[]> => {
  await sleep(2);
  const params = new URLSearchParams();

  if (state) params.append("state", state);
  if (labels.length > 0) {
    const labelString = labels.join(","); //label1,label2,label3
    params.append("labels", labelString);
  }
  params.append("page", "1");
  params.append("per_page", "5");
  const { data } = await githubApi.get<Issue[]>("/issues", { params });
  return data;
};

//aca estamos haciendo la llamada "condicional?"
const useIssues = ({ state, labels }: Props) => {
  const issuesQuery = useQuery(["issues", { state, labels }], () =>
    getIssues(labels, state)
  );

  return {
    issuesQuery,
  };
};

export default useIssues;
