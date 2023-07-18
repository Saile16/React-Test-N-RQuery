import { githubApi } from "../../api/githubApi";
import { useQuery } from "@tanstack/react-query";
import { Issue } from "../interfaces/issue";
const getIssues = async (): Promise<Issue[]> => {
  const { data } = await githubApi.get<Issue[]>("/issues");
  return data;
};

const useIssues = () => {
  const issuesQuery = useQuery(["issues"], getIssues);

  return {
    issuesQuery,
  };
};

export default useIssues;
