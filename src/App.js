import React from 'react';
import './App.css';

function App() {
  return (
    <div className="with-sidebar">
      <div>
        <div className="sidebar">
          <div className="title-area">
            <h3 id="title">Material-UI</h3>
            <span id="version">v1.4.1</span>
          </div>
          <div className="diamond-sponsors">
            <span>Diamond Sponsors</span>
            <div className="plus-box-button">+</div>
          </div>
          <div className="navigation-menu">
            <ul className="list-nav">
              <li className="list-item">Getting Started</li>
              <li className="list-item">Components</li>
              <li className="list-item">Component API</li>
              <li className="list-item">Styles</li>
              <li className="list-item">System</li>
              <li className="list-item">Customization</li>
              <li className="list-item">Guides</li>
              <li className="list-item">Premium Themes</li>
              <li className="list-item">Discover More</li>
              <li className="list-item">Versions</li>
              <li className="list-item">Blog</li>
            </ul>
          </div>
        </div>
        <div className="not-sidebar">
          <div className="top-nav">
            <div>
              search
            </div>
            <div>
              language
            </div>
            <div>
              icons
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
