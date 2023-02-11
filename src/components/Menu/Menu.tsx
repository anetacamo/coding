import MenuItem from '../MenuItem/MenuItem';
import postlist from '../../posts.json';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const menuItems = postlist.filter((item) => item.menu);

  var byValue = menuItems.slice(0);
  byValue.sort(function (a, b) {
    return (b.value as Number | any) - (a.value as Number | any);
  });
  return (
    <div className={styles.menu}>
      <div className={styles.inner}>
        <Link to='home'>
          <li>home</li>
        </Link>
        <div className='flex'>
          {menuItems.map((item) => (
            <MenuItem item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Header;
