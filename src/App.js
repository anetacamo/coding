import Header from './components/header';
import MegaMenu from './components/megaMenu';
import Content from './components/content';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <div className='container blog-text'>
        <Switch>
          <Route path='/home' exact component={Content} />
          <Route path='/html' component={Content} />
          <Route path='/css' component={Content} />
          <Route path='/css-props' component={Content} />
          <Route path='/html-tags' component={Content} />
          <Route path='/excer-cises' component={Content} />
        </Switch>
      </div>
      <MegaMenu />
    </Router>
  );
}
export default App;
