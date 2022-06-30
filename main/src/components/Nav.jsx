import React from 'react';
import Logo from '../assets/quitar_fondo.png';
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className='nav'>
      <img src={Logo} alt='logoHenry' id='logoHenry'/>
      <div > 
        <h3 className='title'>Weather App</h3> 
        </div>
      
      <SearchBar onSearch={onSearch}/>
    </nav>
  );
};

export default Nav;
