import Header from './components/header';
import MegaMenu from './components/megaMenu';
import Content from './components/content';
import postlist from './posts.json';
import { slugify } from './utils/slugify';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {postlist.map((post, index) => (
          <Route
            path={`/${slugify(post.title)}`}
            component={Content}
            exact
            key={index}
          />
        ))}
      </Switch>
      <MegaMenu />
    </Router>
  );
}
export default App;
