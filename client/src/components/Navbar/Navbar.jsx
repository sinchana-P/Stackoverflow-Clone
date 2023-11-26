import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// another HOOK called "useSelector"
import { useSelector, useDispatch } from 'react-redux'
import logo from '../../assets/logo.png'
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'

const Navbar = () => {
  const dispatch = useDispatch() 

  
  // var User = null ;
  //    we'll be using (the user name and "avatar") this many times, so it's done using "Reducer" ---> currentUser.js
  //    to use it, through out our application.
  //    so, we can dispatch the value, in "REDUX"

  // var User = JSON.parse(localStorage.getItem('Profile')); 

  // useSelector --> is a hook
  // by using this below line, we can access USER data anywhere in our application.
  var User = useSelector((state) => (state.currentUserReducer));
  // state.currentUserReducer  ---> returns wt is returned from (return action.payload;) "reducers/currentUser.js".

  // This (useEffect) is a side effect, like a function.
  // It runs whenever the navbar is visible in the browser,
  // here, our NAVBAR is visible in all pages of our project.
  useEffect(() => { 
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  },[dispatch])
  // this is a dependency array.
  // whenever the [dispatch] is occured, the dispatch function inside useEffect is executed
  
  return (
    <nav className='main-nav'>
      <div className="navbar">
        <Link to='/' className='nav-item nav-logo'>
            <img src={logo} alt="logo" width='100px'/>
        </Link>
        <Link to='/about' className="nav-item nav-btn"> About </Link> 
        <Link to='/' className="nav-item nav-btn"> Products </Link> 
        <Link to='/' className="nav-item nav-btn"> For Teams </Link> 
        <form> 
          <input type="search" placeholder='search here...'/> 
          <i class="fa-solid fa-magnifying-glass"></i>
        </form> 
        { User === null ? 
            <Link to='/Auth' className="nav-item nav-links">Log in</Link> :   
            <> 
              <Avatar backgroundColor="#009dff" px="10px" py="4px" borderRadius="50%" color="white" ><Link to='/User' style={{color:'white',textDecoration:'none'}}>S</Link></Avatar>
              <button className='nav-item nav-links'>Log out</button>
            </>    
        } 
      </div> 
    </nav> 
  )
}

export default Navbar


// 1.  <Link to='/Auth' className="nav-item nav-links">Log in</Link>

// 2.  <Route path='/Auth' component={Auth}/>             {AllRoutes.jsx}