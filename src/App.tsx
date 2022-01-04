import { useState } from "react";
import Editor from "./components/Editor";
import placeholder from "./components/placeholder";
import AppStyled from "./styles/AppStyled";
import HeadingStyled from "./styles/HeadingStyled";

const App = () => {
  const [markdown, setMarkdown] = useState(placeholder);

  return (
    <>
      <AppStyled />
      <HeadingStyled>Markdown Previewer</HeadingStyled>
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
    </>
  );
};

export default App;
