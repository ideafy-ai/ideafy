import "../_globals/global.scss";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { useNavigate, useParams } from "react-router-dom";
import GithubService from "../services/Github.service";
import { useEffect, useState } from "react";
import { ClipLoader, RotateLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Search() {
  const [repos, setRepos] = useState([]);
  const [allRepos, setAllRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const match = { params: useParams() };
  const color = "#2a73ff";
  const navigate = useNavigate();
  useEffect(() => {
    setRepos([]);
    GithubService.getRepositories(match.params.user!).then((res) => {
      setRepos(res);
      setAllRepos(res);
      setLoading(false);
      if (!res.length && match.params.user) {
        toast.info("No data was found");
        navigate("/search");
      }
    });
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [loading]);
  const rewind = () => {
    navigate("/search");
  };
  if (match.params.user) {
    return (
      <div className="container flex-12 flex h-auto wrap column relative">
        <ToastContainer />
        <div className="rewind">
          <a onClick={rewind}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </a>
        </div>

        <h1 className="title">Search using Repository Name</h1>
        <SearchBar
          type="big"
          placeholder="Type the repository's name"
          loading={loading}
          setLoading={setLoading}
          user={match.params.user}
          setRepos={setRepos}
          repos={repos}
          allRepos={allRepos}
        />
        <div className="card-container">
          <ClipLoader color={color} loading={loading} size={150}></ClipLoader>
          {(() => {
            const cards = [];

            for (let i = 0; i < repos.length; i++) {
              cards.push(<Card key={i} repo={repos[i]} />);
            }
            return cards;
          })()}
        </div>
      </div>
    );
  }
  return (
    <div className="container flex-12 flex h-100 wrap column">
      <ToastContainer />
      <h1 className="title">Type in github username</h1>
      <SearchBar type="big" placeholder="Type the github username" loading={loading} setLoading={setLoading} />
    </div>
  );
}

export default Search;
