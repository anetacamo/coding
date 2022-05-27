import React from 'react';

import MenuItem from './menuItem';

import postlist from '../posts.json';

const Header = () => {
  return (
    <div className='menu bg-blueviolet'>
      <div className='container flex'>
        {postlist.map((item) => (item.menu ? <MenuItem item={item} /> : null))}
      </div>
    </div>
  );
};
export default Header;
