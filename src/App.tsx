import Menu from './components/Menu/Menu';
import Content from './components/content';
import Examples from './components/Examples/Examples';
import postlist from './posts.json';
import { slugify } from './utils/slugify';

import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import CsvUploader from './components/CsvUploader/CsvUploader';

function App() {
  return (
    <>
      <Menu />
      <Switch>
        <Route path={`/html`} component={Examples} />
        <Route path='/' component={Home} exact />
        {postlist.map((post, index) => (
          <Route
            path={`/${slugify(post.title)}`}
            component={Content}
            exact
            key={index}
          />
        ))}
        <Route path={`/#/html`} component={Examples} />
        <Route path={`/money`} component={CsvUploader} />
      </Switch>
    </>
  );
}
export default App;
