import { BASE_API } from "../config/_vars";

class GithubService {
  
  /**
   * Return the repositories of a specific github user
   * @param {string} username the username of the demanded user
   */
  public static getRepositories(username: string) {
    return fetch(BASE_API + "users/" + username + "/repos").then((res) =>
      res.json()
    );
  }
}

export default GithubService;
