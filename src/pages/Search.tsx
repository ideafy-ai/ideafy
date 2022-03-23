import "../_globals/global.scss";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import GithubService from "../services/Github.service";
import { useEffect, useState } from "react";
import { ClipLoader, RotateLoader } from "react-spinners";
function Search() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const match = { params: useParams() };
  const color = "#2a73ff";
  useEffect(() => {
    setRepos([]);
    GithubService.getRepositories(match.params.user!).then((res) => {
      setRepos(res);
      console.log(repos);
      setLoading(false);
    });
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [loading]);
  if (match.params.user) {
    return (
      <div className="container flex-12 flex h-auto wrap column">
        <h1 className="title">Search using Repository Name</h1>
          <SearchBar type="big" placeholder="Type the repository's name" loading={loading} setLoading={setLoading} />
        <div className="card-container">
        <ClipLoader color={color} loading={loading} size={150}></ClipLoader>
          {(() => {
            const cards = [];

            for (let i = 0;i < repos.length; i++) {
              cards.push(<Card key={i} repo={repos[i]}/>)
            }
            return cards;
          })()}
        </div>
      </div>
    );
  }
  return (
    <div className="container flex-12 flex h-100 wrap column">
      <h1 className="title">Type in github username</h1>
      <SearchBar type="big" placeholder="Type the github username" loading={loading} setLoading={setLoading} />
      
    </div>
    
  );
}

export default Search;
