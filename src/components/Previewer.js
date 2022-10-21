import { marked } from "marked";
import Wrapper from "./Wrapper";
import classes from "./Prewiever.module.css";

marked.setOptions({
  gfm: true,
  breaks: true,
});

function Previewer(props) {
  return (
    <Wrapper
      className={classes.previewWrap}
      htmlFor={props.htmlFor}
      text="Previewer"
    >
      <div
        dangerouslySetInnerHTML={{ __html: marked.parse(props.text) }}
        id={props.id}
        className={classes.preview}
      />
    </Wrapper>
  );
}

export default Previewer;
