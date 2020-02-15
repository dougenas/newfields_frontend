import React from 'react';
import Photocard from './components/photocard'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Votes from '../src/components/votes'



function App() {
  return (
    <Router>
        <Route exact path="/votes" render={() => <Votes />} />
        <Route exact path="/" render={() => <Photocard />} />
    </Router>
    

  );
}

export default App;
