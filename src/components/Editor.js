import Wrapper from "./Wrapper";
import classes from "./Editor.module.css";

function Editor(props) {
  return (
    <Wrapper
      className={classes.editorWrap}
      htmlFor={props.htmlFor}
      text="Editor"
    >
      <textarea id={props.id} value={props.text} onChange={props.onChange} />
    </Wrapper>
  );
}

export default Editor;
