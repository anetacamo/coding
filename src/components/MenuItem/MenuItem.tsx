import { slugify } from '../../utils/slugify';
import { Link } from 'react-router-dom';
import styles from './MenuItem.module.scss';

type AppProps = {
  item: any;
};

const MenuItem = ({ item }: AppProps) => {
  return (
    <Link to={slugify(item.title)}>
      <li className={styles.item}>{item.title}</li>
    </Link>
  );
};
export default MenuItem;
