import { useState } from "react";
import Toolbar from "./Toolbar";
import classes from "./Wrapper.module.css";

function Wrapper(props) {
  const [isMaximized, setIsMaximized] = useState(false);
  function clickHandler() {
    setIsMaximized((curState) => {
      return !curState;
    });
  }

  const classesMaximized = `${classes.maximized}`;

  return (
    <div className={isMaximized ? classesMaximized : props.className}>
      <Toolbar
        htmlFor={props.htmlFor}
        text={props.text}
        isMaximized={isMaximized}
        onClick={clickHandler}
      />
      {props.children}
    </div>
  );
}

export default Wrapper;
