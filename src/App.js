import './App.scss';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { useState } from 'react';
import { defaultMarkdown } from './defaultMarkdown.js';


function App() {
  
  const [ intVPWidth, setIntVPWidth] = useState(window.innerWidth);
  let intViewportPadding = 20;
  let resizerWidth = 8;
  let activeArea = intVPWidth - (2 * intViewportPadding) - resizerWidth;

  const [widthLeft, setWidthLeft] = useState(activeArea * .4);
  //console.log(`widthLeft = ${widthLeft}`);
  const [widthRight, setWidthRight] = useState(activeArea * .6);
  //console.log(`widthRight = ${widthRight}`);

  
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  
  const handleChange = (e) => {
    setMarkdown(e.target.value)
  }

  const setPanelWidths = () => {
    setIntVPWidth(window.innerWidth);
    setWidthLeft(activeArea * .4);
    setWidthRight(activeArea * .6);
  }
  
  window.addEventListener('resize', setPanelWidths);
  console.log(activeArea);

  return (
    <div className="container" style={{gridTemplateColumns: `${widthLeft}px ${resizerWidth}px ${widthRight}px`}}>
      <div className="container-left">
        <div className="label">Editor</div>
        <textarea className="input" id="editor" onChange={handleChange}>
          {defaultMarkdown}
        </textarea>
      </div>
      <div className="resizer"></div>
      <div className="container-right">
      <div className="label">Previewer</div>
        <div className="output">
          <div className="output__html" id="preview" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked.parse(markdown))}}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
