import { marked } from "marked";
import PreviewLabelStyled from "../styles/PreviewLabelStyled";
import PreviewStyled from "../styles/PreviewStyled";

marked.setOptions({
  breaks: true
});

interface PreviewProps {
  markdown: string;
}

const Preview = ({ markdown }: PreviewProps) => {
  const html = marked.parse(markdown);

  return (
    <>
      <PreviewLabelStyled>Preview</PreviewLabelStyled>
      <PreviewStyled
        dangerouslySetInnerHTML={{
          __html: html
        }}
        id="preview"
      />
    </>
  );
};

export default Preview;
