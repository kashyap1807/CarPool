import { BrowserRouter as Router ,Route,Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Sign from './Sign';
import About from './About';
import Login from './Login';
import Footer from './Footer';             

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
          <div className="content">
            <Switch>
              <Route exact path="/home">
                <Home/>
              </Route>
              <Route exact path="/sign">
                <Sign/>
              </Route>
              <Route exact path="/about">
                <About/>
              </Route>
              <Route exact path="/login">
                <Login/>
              </Route>
            </Switch>
          </div>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
