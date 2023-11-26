import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes'
import { fetchAllQuestions } from './actions/question';



function App() {

  const dispatch = useDispatch()

  // using this useEffect: we r fetching data from backEnd & storing it in frontEnd at "STORE".
  // to (display) get access to that data, in frontEnd, we use useSelector 
  // whenever the application is LIVE, useEffect statement gonna run.
  useEffect(() => {
      dispatch(fetchAllQuestions())
  }, [dispatch])
  // dependency array: shd have "dispatch", coz whenever we use dispatch, useEffect runs
  // fetchAllQuestions(): have no parameters, as it is get request, to fetch data from backEnd. 

  return (
    <div className="App">
        <Router>
          <Navbar />
          <AllRoutes />
        </Router>
    </div>
  );
}

export default App;