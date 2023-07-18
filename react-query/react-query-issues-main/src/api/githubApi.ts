import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
