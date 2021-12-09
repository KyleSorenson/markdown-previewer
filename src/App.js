import './App.scss';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { useState, useEffect } from 'react';
// import { defaultMarkdown } from './defaultMarkdown.js';
const markdownPath = 'markdown.md'; // relative to public folder

function App() {

    // Handling Resize

  const calculateLeftPane = (windowInnerWidth) => {
    const padding = 20;
    const percent = .4;
    return (windowInnerWidth - (padding * 2)) * percent
  }

  const calculateRightPane = (windowInnerWidth, leftPaneWidth) => {
    const padding = 20;
    const gutterWidth = 10;
    return windowInnerWidth - leftPaneWidth - gutterWidth - ( padding * 2)
  }

  const [dimensions, setDimensions] = useState({
    window: window.innerWidth,
    leftPane: calculateLeftPane(window.innerWidth),
    rightPane: calculateRightPane(window.innerWidth, calculateLeftPane(window.innerWidth)),
  });

  // Handling Markdown
 
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(markdownPath)
      .then(response => response.text())
      .then(text => {
        setMarkdown(text);
      })
  },[]);

  const handleChange = (e) => {
    setMarkdown(e.target.value)
  }

  const handleResize = (e) => {
    e.preventDefault();
    let prevX = e.clientX;

    const mousemove = (e) => {
      let newX = prevX - e.clientX;
      setDimensions({
        window: dimensions['window'],
        leftPane: dimensions['leftPane'] - newX,
        rightPane: calculateRightPane(window.innerWidth, dimensions['leftPane'] - newX)
      })
    }
    
    const mouseup = () => {
      window.removeEventListener('mousemove', mousemove);
      window.removeEventListener('mouseup', mouseup);
    }

    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);
  }

  return (
    <div className="container" style={{gridTemplateColumns: `${dimensions['leftPane']}px 1rem auto`}}>
      <div className="left-pane" id="left-pane">
        <div className="label">Editor</div>
        <textarea className="input" id="editor" onChange={handleChange}>
          {markdown}
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
