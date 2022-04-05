import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
          alt="linkedin logo"
        />
        {/* <LinkedInIcon /> */}

        <div className="header__search">
          <SearchIcon />
          <input type="text" name="" id="" />
        </div>

      </div>

      <div className="header__right">

      </div>
    </div>
  );
}

export default Header