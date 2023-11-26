import React from 'react'
// import {Switch, Route} from 'react-router'
// import { BrowserRouter as  Route, Switch } from 'react-router-dom'
// import Switch from "react-switch";
// import Route from 'react-router'
import { Routes, Route } from "react-router-dom";

import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/Auth' element={<Auth/>}/>
      <Route path='/Questions/:id' element={<DisplayQuestion/>}/>
      <Route path='/Questions' element={<Questions/>}/>
      <Route path='/AskQuestion' element={<AskQuestion/>}/>
    </Routes>
      // <Routes>
      //   <Route exact path='/' component={Home}/>
      //   <Route path='/Auth' component={Auth}/>
      //   <Route path='/Questions/:id' component={DisplayQuestion}/>
      //   <Route path='/Questions' component={Questions}/>
      //   <Route path='/AskQuestion' component={AskQuestion}/>
      // </Routes>
    )
}

export default AllRoutes

// Switch : Component used to combine (wrap) all the routes 

// terminal  :  npm install react-router-dom@5               ---> to get Switch in react-router-dom
// if you want to use 'Switch' then install react-router-dom version 5. Switch is replaced in react-router-dom version 6.


// can use 'Routes' instead of 'Switch'


// Alternate way :
/*
      <Routes>
        <Route exact path='/' element={<Home />>}/>
        <Route path='/Auth' element={<Auth />}/>
      </Routes>

*/      