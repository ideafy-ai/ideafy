import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../_globals/global.scss";
function Header() {
  const navigate = useNavigate();
  const clickHandler = () => {
    console.log("hi");
    navigate("/search");
  };
  return (
    <div className="full-container head background-white">
      <div className="container">
        <div className="header flex flex-12 space-between p-20">
          <div className="content flex-3">
            <a href="/">
              <h1 className="header-1 p-5">Github Fetch</h1>
            </a>
          </div>
          <div className="content flex-4 flex none-small">
            <a href="https://github.com/Dopeamin" target="_blank">
              <p className="link p-5 mr-10">Check my Github</p>
            </a>
          </div>
          <div className="content flex flex-4 space-around none-xsmall">
            <Button type="primary" text="Get started free" className="mr-10" click={clickHandler}></Button>
            <Button type="secondary" text="Read more" className="ml-10 none-small"></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
