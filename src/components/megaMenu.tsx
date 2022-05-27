import React from 'react';
import postlist from '../posts.json';
import { slugify } from '../utils/slugify';
import { Link } from 'react-router-dom';

const MegaMenu = () => {
  console.log(postlist);
  return (
    <div className='container-wide'>
      <div className='flex box-container'>
        {postlist.map((item, index) =>
          item.display === 'false' ? null : (
            <Link to={slugify(item.title)} key={index}>
              <div className='box'>
                <img
                  src={`/coding/images/${slugify(item.title)}.png`}
                  alt={item.title}
                />
                <h5>
                  {item.title}
                  {item.display}
                </h5>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};
export default MegaMenu;
