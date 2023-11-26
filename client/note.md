route paths : available in search-bar 
---->  place those COMPONENTS under "Pages" folder

Place other COMPONENTS under "components" folder

________________________________________________________________________________________________

1.  <Link to='/Auth' className="nav-item nav-links">Log in</Link>
on click upon ( Log in )--> get the route "/Auth"

2.  <Route path='/Auth' component={Auth}/>                  {AllRoutes.jsx}
for the route "/Auth"  --->  render the component "Auth"

________________________________________________________________________________________________

use "App.css"  --->> to style common classNames
e.g.  ".home-container-1"

________________________________________________________________________________________________
NavLink ---> has extra activeClassName
whereas Link doesn't have this

activeClassName : for which route the url matches 
that gets the applied CSS property.

________________________________________________________________________________________________
________________________________________________________________________________________________

## TO CREATE AVATAR IN NAVBAR

- actions/currentUser.js
- Navbar/Navbar.jsx             (useSelector)
- reducers/currentUser.js  &  index.js

________________________________________________________________________________________________
