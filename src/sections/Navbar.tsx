import React from 'react'
import pokeball_icon from '../assets/pokeball-icon.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import { Link, Route, useLocation } from 'react-router-dom';

const Navbar = () => {
  const locate = useLocation();

  const navigationRoutes = [
    {
      name: 'search',
      route: '/search'
    },
    {
      name: 'compare',
      route: '/compare',
    },
    {
      name: 'pokemon',
      route: '/pokemon',
    },
    {
      name: 'mylist',
      route: '/mylist',
    },
    {
      name: 'about',
      route: '/about',
    },
  ];


  return (
    <nav>
      <div className="block">
        <img src={pokeball_icon} alt='pokeball' />
      </div>
      <div className="navdata">
        <ul>
          {navigationRoutes.map((Routes)=>{
            return(
              <Link to={Routes.route} key={Routes.name} className={`${locate.pathname.startsWith(Routes.route) ? 'active' : ''}`}>
                <li>
                  {Routes.name}
                </li>
              </Link>
              
            );
          })}
        </ul>
      </div>
      <div className="block">
        <GiHamburgerMenu />
      </div>
    </nav>
  )
}

export default Navbar