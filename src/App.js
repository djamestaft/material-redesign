import React from 'react';
import './App.css';
import { TextField } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles, Select, MenuItem } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const StyledText = withStyles({
  root: {
    background: '#656565',
    borderRadius: 4,
    color: 'white',
    height: '37px',
    padding: '0 30px 0 10px',
    maxWidth: '120px',
  },
  label: {
    textTransform: 'capitalize',
  },
  placeholder: {
    color: 'white'
  }
})(TextField);

const StyledSelect = withStyles({
  root: {
    background: '#656565',
    borderRadius: 4,
    color: 'white',
    height: '37px',
    padding: '0 30px 0 10px',
    maxWidth: '120px',
    display: 'flex',
    alignItems: 'center',
    border: 'none !important'
  },
  select: {
    fontSize: '12px',
    borderRadius: 2
  },
  selectIcon: {
    color: 'white'
  },
  placeholder: {
    color: 'white'
  }
})(Select);

function App() {
  return (
    <div className="with-sidebar">
      <div>
        <div className="sidebar">
          <div className="title-area">
            <h3 id="title">Maurice-UI</h3>
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
            <div className="search-container">
              <StyledText 
                placeholder="Search..."
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <IconButton 
                      style={{height: '37px'}}
                    >
                      <SearchIcon style={{ color: 'white' }}/>
                    </IconButton>
                  )
                }}
              />
            </div>
            <div>
                <StyledSelect disableUnderline={true} labelId="label" id="select" value="20">
                  <MenuItem value="10">Ten</MenuItem>
                  <MenuItem value="20">Twenty</MenuItem>
              </StyledSelect>
            </div>
            <div className="nav-icons">
              <NotificationsIcon className="icon"/>
              <InvertColorsIcon className="icon"/>
              <GitHubIcon className="icon"/>
              <Brightness7Icon className="icon"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
