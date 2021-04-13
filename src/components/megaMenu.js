import React from 'react';
import postlist from '../posts.json';
import { slugify } from '../utils/slugify';

const MegaMenu = () => {
  console.log(postlist);
  return (
    <div className='container-wide'>
      <div className='flex box-container'>
        {postlist.map((item) => (
          <a href={slugify(item.title)} className='box'>
            <div>
              <img
                src={`/coding/images/${slugify(item.title)}.png`}
                alt={item.title}
              />
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
export default MegaMenu;
