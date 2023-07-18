import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
