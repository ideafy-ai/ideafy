import "../_globals/global.scss";
import blue from "../assets/blue.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div className="container flex-12 flex h-100 wrap">
      <div className="content flex flex-6 column flex-start p-10">
        <h1 className="title text-left" data-testid="landing-title">
          Fetch Github Repositories through their names and their owners.
        </h1>
        <p className="paragraph" data-testid="landing-paragraph">
          An awesome lightweight application that fetches the repositories of
          github users. There are alot of alternatives to fetching data from
          github , however some seem to be outdated and lack a sense of
          creativity and minimalism which our solution is offering Here's why:
          Simple and intuitive design, Smooth performance and Easy to use
        </p>
        <div className="content flex flex-start p-0 mt-10">
          <Link to={"./search"}>
            <Button
              type="primary"
              text="Get started free"
              className="mr-10"
            ></Button>
          </Link>
          <a
            href="https://github.com/Dopeamin/github-repositories-fetch/blob/master/README.md"
            target="_blank"
          >
            <Button
              type="secondary"
              text="Read more"
              className="ml-10"
            ></Button>
          </a>
        </div>
      </div>
      <div className="content flex flex-6 image-container none-small">
        <img src={blue} className="landing-image" alt="hand"></img>
      </div>
    </div>
  );
}

export default Landing;
