import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../_globals/global.scss";
function SearchBar(props: any) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const navigateToSearch = () => {
    navigate("/search/" + search);
    props.setLoading(true);
  };
  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      navigateToSearch();
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
