import React from 'react'
import './Navbar.css';
import CakeIcon from '@mui/icons-material/Cake';

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='navbar-container'>
        <div className='left'>
          <div className='brand-icon'>
            <CakeIcon
              sx={{ fontSize: 40, color: '#fff' }}
            />
          </div>
          <h1>Brand</h1>
        </div>
        <div className='right'>
            <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
                <li>Option 4</li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Navbar