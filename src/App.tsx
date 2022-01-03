import { useState } from "react";
import Editor from "./components/Editor";
import placeholder from "./components/placeholder";

const App = () => {
  const [markdown, setMarkdown] = useState(placeholder);

  return (
    <>
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
    </>
  );
};

export default App;
