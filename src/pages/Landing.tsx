import "../_globals/global.scss";
import blue from "../assets/blue.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div className="container flex-12 flex h-100 wrap">
      <div className="content flex flex-6 column flex-start p-10">
        <h1 className="title text-left">
          Fetch Github Repositories through their names and their owners.
        </h1>
        <p className="paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, neque
          ducimus eaque est doloremque veniam minus odit fugit quisquam laborum
          voluptates animi! Accusantium incidunt architecto provident maxime
          reiciendis impedit dolorum.
        </p>
        <div className="content flex flex-start p-0 mt-10">
          <Link to={"./search"}>
            <Button
              type="primary"
              text="Get started free"
              className="mr-10"
            ></Button>
          </Link>
          <Button type="secondary" text="Read more" className="ml-10"></Button>
        </div>
      </div>
      <div className="content flex flex-6 image-container none-small">
        <img src={blue} className="landing-image" alt="hand"></img>
      </div>
    </div>
  );
}

export default Landing;
