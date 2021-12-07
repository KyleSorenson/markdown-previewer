import './App.scss';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { useState } from 'react';
import { defaultMarkdown } from './defaultMarkdown.js';

function App() {

  const leftPane = document.getElementById('left-pane');
  const rightPane = document.getElementById('right-pane')
  // const leftPaneWidth = leftPane.getBoundingClientRect().width;
  // const rightPaneWidth = rightPane.getBoundingClientRect().width;

  // console.log(`left: ${leftPaneWidth} right: ${rightPaneWidth}`);

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value)
  }

  const handleResize = (e) => {
    
    console.log(e.pageX)

    const mousemove = () => {

    }
    
    const mouseup = () => {
      window.removeEventListener('mousemove', mousemove);
      window.removeEventListener('mouseup', mouseup);
    }

    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);
  }

  return (
    <div className="container">
      <div className="left-pane" id="left-pane">
        <div className="label">Editor</div>
        <textarea className="input" id="editor" onChange={handleChange}>
          {defaultMarkdown}
        </textarea>
      </div>
      <div className="gutter" onMouseDown={handleResize}></div>
      <div className="right-pane" id="right-pane">
      <div className="label">Previewer</div>
        <div className="output">
          <div className="output__html" id="preview" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(marked.parse(markdown))}}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
