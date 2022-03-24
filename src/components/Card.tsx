import "../_globals/global.scss";
import RepositoryModel from "../moodels/Repository.model";
function Card(props: any) {
  const repo: RepositoryModel = props.repo;
  const date1 : any = new Date(repo.updated_at);
  const date2 : any = new Date();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return (
    <a href={repo.html_url}>
      <div className="content bg-light-grey card">
        <div className="info flex flex-start mr-10">
          <div className="avatar">
            <img src={repo.owner.avatar_url} alt="user"></img>
          </div>
          <div className="flex column ml-10 flex-start mt-10">
            <p className="header-3 p-0 m-0 no-overflow">{repo.name}</p>
            <p className="m-0 paragraph paragraph-small">{repo.owner.login}</p>
          </div>
        </div>
        <div className="content">
          <p className="mt-10 paragraph paragraph-small no-overflow-bigger">
            {repo.description ? repo.description : "No Description"}
          </p>
        </div>
        <div className="content flex space-between">
          <p className="paragraph paragraph-xsmall flext-6">
            {repo.language ? repo.language : "No Language"}
          </p>
          <p className="paragraph paragraph-xsmall flext-6">
            {diffDays} day(s) ago
          </p>
        </div>
      </div>
    </a>
  );
}

export default Card;
