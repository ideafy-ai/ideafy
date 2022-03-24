import { BASE_API } from "../config/_vars";

class GithubService {
  public static getRepositories(username: string) {
    return fetch(BASE_API + "users/" + username + "/repos").then((res) =>
      res.json()
    );
  }
}

export default GithubService;
