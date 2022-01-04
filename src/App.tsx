import { useState } from "react";
import Editor from "./components/Editor";
import placeholder from "./components/placeholder";
import AppStyled from "./styles/AppStyled";

const App = () => {
  const [markdown, setMarkdown] = useState(placeholder);

  return (
    <>
      <AppStyled />
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
    </>
  );
};

export default App;
