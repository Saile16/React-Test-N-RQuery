import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
