import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import RepositoryModel from "../models/Repository.model";
import "../_globals/global.scss";
function SearchBar(props: any) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const navigateToSearch = (event: any) => {
    if (props.user === undefined) {
      navigate("/search/" + search);
      props.setLoading(true);
      props.setRefresh(props.refresh + 1);
    } else {
      props.setRepos(props.allRepos);
      const repos: RepositoryModel[] = props.allRepos;
      console.log(props.repos);
      if (!props.repos.length) toast.info("No data was found");
      if (search !== "") {
        props.setRepos(
          repos.filter((el: RepositoryModel) => {
            return el.name.toLowerCase().includes(search.toLocaleLowerCase());
          })
        );
      }
      console.log(props.repos);
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      navigateToSearch(event);
    }
  };
  if (props.type === "big")
    return (
      <div className="search flex-6 mw-200 mt-10">
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
  return (
    <div className="search flex-3 mw-200 mt-10">
      <input
        id="search"
        placeholder={props.placeholder}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        onKeyPress={handleKeyPress}
      ></input>
    </div>
  );
}

export default SearchBar;
