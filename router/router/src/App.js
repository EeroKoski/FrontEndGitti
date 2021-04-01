import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router,
  Switch,
  Route,
  Link
} from"react-router-dom";
import Home from './Home';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <div className="App">
     <Router>
      <div>
      <Link to=  "/">Home </Link>{' '}
      <Link to=  "/about/">About</Link>{' '}
      <Link to=  "/contact/">Contact</Link>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />

      </Switch>



      </div>


    </Router> 
     



    </div>
  );
}

export default App;
