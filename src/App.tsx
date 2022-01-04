import { useState } from "react";
import Editor from "./components/Editor";
import placeholder from "./components/placeholder";
import Preview from "./components/Preview";
import AppStyled from "./styles/AppStyled";
import GithubLinkStyled from "./styles/GithubLinkStyled";
import HeadingStyled from "./styles/HeadingStyled";

const App = () => {
  const [markdown, setMarkdown] = useState(placeholder);

  return (
    <>
      <AppStyled />
      <HeadingStyled>Markdown Previewer</HeadingStyled>
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
      <Preview markdown={markdown} />
      <GithubLinkStyled
        href="https://github.com/attilacs/markdown-previewer"
        target="_blank"
      >
        github
      </GithubLinkStyled>
    </>
  );
};

export default App;
