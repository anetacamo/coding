import Header from './components/header';
import MegaMenu from './components/megaMenu';
import Content from './components/content';
import Welcome from './components/welcome';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Welcome} />
        <Route path='/home' component={Content} />
        <Route path='/html' component={Content} />
        <Route path='/css' component={Content} />
        <Route path='/css-props' component={Content} />
        <Route path='/html-tags' component={Content} />
        <Route path='/excer-cises' component={Content} />
      </Switch>
      <MegaMenu />
    </Router>
  );
}
export default App;
