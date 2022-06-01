import "../_globals/global.scss";
import { useState } from "react";
import { IdeaModel } from "../models/Idea.model";
import { toast } from "react-toastify";
function Card(props: any) {
  const idea: IdeaModel = props.idea;
  const clickHandler = props.clickHandler;
  const [visible, setVisible] = useState(false);
  /**
   * Calculate Date difference
   */

  /**
   * Show the modal
   */

  const upVote = async () => {
    const req = await fetch(
      "http://localhost:3001/idea/upvote?id=" + (idea.id || ""),
      {
        method: "GET",
      }
    ).then((t) => {
      toast.success("Upvoted Successfully");
      return t.json();
    });
    await clickHandler();
  };
  const downVote = async () => {
    const req = await fetch(
      "http://localhost:3001/idea/downVote?id=" + (idea.id || ""),
      {
        method: "GET",
      }
    ).then((t) => {
      toast.error("Downvoted Successfully");
      return t.json();
    });
    await clickHandler();
  };
  const showModal = () => {
    setVisible(!visible);
  };
  return (
    <>
      {idea && (
        <div
          className="content bg-light-grey card"
          onClick={showModal}
          data-testid="card"
          id="card"
        >
          <div className="content">
            <h1>Generated Idea</h1>
            <p className="mt-10 paragraph paragraph-small">
              {idea.idea ? idea.idea : "No Description"}
            </p>
          </div>
          <div className="content flex space-between">
            <div className="flex space-between">
              <div onClick={upVote}>
                <HeartIcon />
              </div>
              <p
                className="paragraph paragraph-xsmall flext-6 green ml-5"
                style={{ marginLeft: "10px", marginRight: "10px" }}
              >
                Upvotes : {idea.votes ? idea.votes : "No Language"}
              </p>
			  <div onClick={downVote}>
                <DownVoteIcon />
              </div>
            </div>
            <p className="paragraph paragraph-xsmall flext-6">
              {idea.date} ago
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;

export const HeartIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
};

export const DownVoteIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
      />
    </svg>
  );
};
