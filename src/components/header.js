import React from 'react';

import MenuItem from './menuItem';

import postlist from '../posts.json';

const Header = () => {
  return (
    <div class='menu bg-blueviolet'>
      <div class='container flex'>
        {postlist.map((item) => (
          <MenuItem item={item} />
        ))}
      </div>
    </div>
  );
};
export default Header;
