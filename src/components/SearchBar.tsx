import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RepositoryModel from "../models/Repository.model";
import "../_globals/global.scss";
function SearchBar(props: any) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const navigateToSearch = (event: any) => {
    if (props.user === undefined) {
      event.target.value = "";
      navigate("/search/" + search);
      props.setLoading(true);
    } else {
      props.setRepos(props.allRepos);
      const repos: RepositoryModel[] = props.allRepos;
      if (search !== "")
        props.setRepos(
          repos.filter((el: RepositoryModel) => {
            return el.name.toLowerCase().includes(search.toLocaleLowerCase());
          })
        );
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      navigateToSearch(event);
    }
  };

  return (
    <div className="search big">
      <input
        id="search"
        placeholder={props.placeholder}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        onKeyPress={handleKeyPress}
      ></input>
      <div className="next flex" onClick={navigateToSearch}>
        Go
      </div>
    </div>
  );
}

export default SearchBar;
