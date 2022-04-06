import React from 'react'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Adirondacks_in_May_2008.jpg/1280px-Adirondacks_in_May_2008.jpg"
          alt="bannerimage"
        />

        <AccountCircleRoundedIcon className="sidebar__avatar" />

        <h2>Barath Developer</h2>
        <h4>JavaScript | ReactJS | NodeJS</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile?</p>
          <p className="sidebar__statNumber">10234</p>
        </div>
        <div className="sidebar__stat">
          <p>Total post views</p>
          <p className="sidebar__statNumber">8765</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
}

export default Sidebar