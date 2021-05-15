import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Components/Navbar'
import ExerciseList from './Components/ExerciseList'
import EditExercise from './Components/EditExercise'
import CreateExercise from './Components/CreateExercise'
import CreateUser from './Components/CreateUser'

function App() {
  return (
    <Router>
       
      <Navbar/><br/>
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id" component={EditExercise}/>
      <Route path="/create" component={CreateExercise}/>
      <Route path="/user" component={CreateUser}/>
      
    </Router>
  );
}

export default App;
