import React from 'react';
import { slugify } from '../utils/slugify';
import { Link } from 'react-router-dom';

type AppProps = {
  item: any;
};

const MenuItem = ({ item }: AppProps) => {
  return (
    <Link to={slugify(item.title)}>
      <img src={`/coding/images/${slugify(item.title)}.png`} alt={item.title} />
      <li>{item.title}</li>
    </Link>
  );
};
export default MenuItem;
