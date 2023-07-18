import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
