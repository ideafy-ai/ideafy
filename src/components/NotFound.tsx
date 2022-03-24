import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../_globals/global.scss";
function NotFound() {
  return (
    <div className="container flex-12 flex h-100 wrap column relative grey">
      <FontAwesomeIcon icon={faBan} className="title"/>
      <div className="title">404 NOT FOUND</div>
    </div>
  );
}

export default NotFound;
