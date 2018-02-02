import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AxiosTest from './components/AxiosTest';
import IsomorphicFetchTest from './components/IsomorphicFetchTest';
import SuperagentTest from './components/SuperagentTest';

const logo = require('./logo.svg');

const Routes = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Axios</Link>
      </li>
      <li>
        <Link to="/isomorphic-fetch">Isomorphic Fetch</Link>
      </li>
      <li>
        <Link to="/superagent">Superagent</Link>
      </li>
    </ul>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <div>
            <Routes />
            <Switch>
              <Route exact={true} path="/" component={AxiosTest} />
              <Route path="/isomorphic-fetch" component={IsomorphicFetchTest} />
              <Route path="/superagent" component={SuperagentTest} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
