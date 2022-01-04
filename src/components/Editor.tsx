import EditorLabelStyled from "../styles/EditorLabel";
import EditorStyled from "../styles/EditorStyled";

interface EditorProps {
  markdown: string;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}

const Editor = ({ markdown, setMarkdown }: EditorProps) => {
  return (
    <>
      <EditorLabelStyled>Editor</EditorLabelStyled>
      <EditorStyled
        name="editor"
        id="editor"
        autoFocus
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
    </>
  );
};

export default Editor;
