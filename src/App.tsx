import Menu from './components/Menu/Menu';
import Content from './components/content';
import postlist from './posts.json';
import { slugify } from './utils/slugify';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Menu />
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
    </Router>
  );
}
export default App;
