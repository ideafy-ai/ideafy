import "../_globals/global.scss";
import RepositoryModel from "../models/Repository.model";
import { useEffect } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faCodeFork, faEye, faStar, faTimes } from "@fortawesome/free-solid-svg-icons";
function Modal(props: any) {
  const repo: RepositoryModel = props.repo;
  const date1: any = new Date(repo.updated_at);
  const date2: any = new Date();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const mouseDownHandler = (event: any) => {
    if (event.target.id === "wrapper") exit();
  };

  const exit = () => {
    props.setVisible(false);
  };
  if (props.visible)
    return (
      <div className="modal-container" id="wrapper" onMouseDown={mouseDownHandler}>
        <div className="modal">
          <FontAwesomeIcon icon={faTimes} className="exit" onClick={exit} />
          <div className="info flex flex-start mr-10">
            <div className="avatar">
              <img src={repo.owner.avatar_url} alt="user"></img>
            </div>
            <div className="flex column ml-10 flex-start mt-10">
              <p className="header-3 p-0 m-0">{repo.name}</p>
              <p className="m-0 paragraph">{repo.owner.login}</p>
            </div>
          </div>
          <div className="content">
            <p className="mt-10 paragraph">{repo.description ? repo.description : "No Description"}</p>
          </div>
          <div className="content flex">
            <a href={repo.html_url} target="_blank">
              <Button type="secondary" text="See more" className="flex-2" />
            </a>
            <div className="flex-6"></div>
          </div>
          <div className="icons flex wrap">
            <div className="flex space-evenly flex-4 mw-100">
              <FontAwesomeIcon icon={faStar} className="golden"></FontAwesomeIcon> <p className="golden">{repo.stargazers_count} stars</p>
            </div>

            <div className="flex space-evenly flex-4 mw-100">
              <FontAwesomeIcon icon={faCodeFork} className="grey"></FontAwesomeIcon> <p className="grey">{repo.forks_count} forks</p>
            </div>

            <div className="flex space-evenly flex-4 mw-200">
              <FontAwesomeIcon icon={faEye} className="grey"></FontAwesomeIcon> <p className="grey">{repo.watchers_count} watchers</p>
            </div>
            <div className="flex-6"></div>
          </div>
          <div className="content flex space-between wrap">
            <p className="paragraph flext-6">{repo.language ? repo.language : "No Language"}</p>
            <p className="paragraph flext-6">{diffDays} day(s) ago</p>
          </div>
        </div>
      </div>
    );
  else return <></>;
}

export default Modal;
