import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import RepositoryModel from "../models/Repository.model";
import "../_globals/global.scss";
function SearchBar(props: any) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const preview = props.preview ? props.preview : false;
  /**
   * Navigate to specific user repositories or filter through a user's repository
   * and show a toast if there is no data found
   * @param {ant} event
   */
  const navigateToSearch = (event: any) => {
    if(!preview)
    if (props.user === undefined) {
      navigate("/search/" + search);
      props.setLoading(true);
      props.setRefresh(props.refresh + 1);
    } else {
      props.setRepos(props.allRepos);
      const repos: RepositoryModel[] = props.allRepos;
      if (search !== "") {
        props.setRepos(
          repos.filter((el: RepositoryModel) => {
            return el.name.toLowerCase().includes(search.toLocaleLowerCase());
          })
        );
        if (
          !repos.filter((el: RepositoryModel) => {
            return el.name.toLowerCase().includes(search.toLocaleLowerCase());
          }).length
        ) {
          toast.info("No data was found");
        }
      }
    }
  };
  /**
   * Handle Key press enter inside of search field to
   * trigger search.
   * @param {any} event
   */
  const handleKeyPress = (event: any) => {
    
    if (event.key === "Enter") {
      navigateToSearch(event);
    }
  };
  if (props.type === "big")
    return (
      <div className="search flex-6 mw-200 mt-10" id="repository">
        <input
          id="repository"
          placeholder={props.placeholder}
          onChange={(event) => {
            if(!preview)setSearch(event.target.value);
          }}
          data-testid="repository"
          onKeyPress={handleKeyPress}
        ></input>
        <div className="next flex" onClick={navigateToSearch}>
          Go
        </div>
      </div>
    );
  return (
    <div className="search flex-3 mw-200 mt-10" id="username">
      <input
        id="username"
        placeholder={props.placeholder}
        onChange={(event) => {
          if(!preview) setSearch(event.target.value);
        }}
        onKeyPress={handleKeyPress}
        
      ></input>
    </div>
  );
}

export default SearchBar;
