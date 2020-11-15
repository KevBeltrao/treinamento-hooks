// import { useEffect, useState } from 'react';
// import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import './App.css';

import Child1 from './Child1';
import Child2 from './Child2';

const App = () => {
  // const [user, setUser] = useState({});
  // const [isLoading, setIsLoading] = useState(true);


  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const { data } = await axios.get('https://api.github.com/users/kbmelo');

  //     setUser(data);
  //     setIsLoading(false);
  //   }

  //   fetchUser()
  // }, []);

  return (
    <div className="App">
      <Router>
        {/* {isLoading ? (
          <img src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="" />
        ) : (
          <>
            <h1>{user.login}</h1>
      
            <img src={user.avatar_url} alt=""/>
          </>
        )} */}

        <Link to="/">Home</Link>
        <Link to="/page2">page 2</Link>

        <Switch>
          <Route path="/" exact component={Child1} />
          <Route path="/page2" component={Child2} />
        </Switch>
    </Router>
      </div>
  );
};

export default App;
