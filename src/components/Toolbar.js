import classes from "./Toolbar.module.css";

function Toolbar(props) {
  return (
    <div className={classes.toolbar}>
      <i className="fa-brands fa-free-code-camp"></i>
      <label htmlFor={props.htmlFor}>{props.text}</label>
      <button onClick={props.onClick}>
        <i
          className={
            props.isMaximized ? "fa-solid fa-minimize" : "fa-solid fa-maximize"
          }
        ></i>
      </button>
    </div>
  );
}

export default Toolbar;
