import "../_globals/global.scss";
function Button(props : any) {
  if (props.type === "primary")
    return <div className="btn btn-primary">{props.text}</div>;
  else
    return (
      <div className="btn btn-secondary ml-10 mr-10">{props.text}</div>
    );
}

export default Button;
