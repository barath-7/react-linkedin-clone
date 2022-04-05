import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';

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
    <HeaderOption title='Home' Icon={HomeIcon}/>
    <HeaderOption title='My Network' Icon={PeopleAltIcon}/>
    <HeaderOption title='Jobs' Icon={WorkIcon}/>
      </div>
    </div>
  );
}

export default Header