import './App.css';
import Header from './components/header';
import Body from './components/body';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/'>

          </Route>
        </Routes>
          

        <Body/>
      </Router>
    </div>
  );
}

export default App;