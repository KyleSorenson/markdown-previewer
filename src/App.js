import './App.scss';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { useState } from 'react';
import { defaultMarkdown } from './defaultMarkdown.js';

function App() {

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value)
  }

  return (
    <div className="container">
      <div className="container-left">
        <div className="label">Editor</div>
        <textarea className="input" id="editor" onChange={handleChange}>
          {defaultMarkdown}
        </textarea>
      </div>
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
