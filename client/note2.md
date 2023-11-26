rafce :
    > react arrow functional component w/ export default at the bottom
    > to create and export component (default component)
_____________________________________________________________________________________________________
React.StrictMode :

React.StrictMode is a tool that highlights potential issues in a programme. 
It works by encapsulating a portion of your full application as a component. 
StrictMode does not render any visible elements in the DOM in development mode, 
but it enables checks and gives warnings.

What is React Strict Mode?
React Strict Mode is a developer tool highlighting potential bugs or issues in a React application's codebase. 
It provides warnings to developers as feedback for errors that occur in an application, 
with no effect on the result because it does not render any visible UI.

_____________________________________________________________________________________________________
Router :

What is router in React?
React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. 
It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. 
It also allows us to use browser history features while preserving the right application view.

______________________________________________________________________________________________________
Link :

What is a link in React?
A <Link> is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom , 
a <Link> renders an accessible <a> element with a real href that points to the resource it's linking to.
______________________________________________________________________________________________________
React Router DOM :

What is react router dom in React JS?
React Router DOM enables you to implement dynamic routing in a web app. 
Unlike the traditional routing architecture in which the routing is handled in a configuration outside of a running app, 
React Router DOM facilitates component-based routing according to the needs of the app and platform

______________________________________________________________________________________________________
react router :

Is react router a package or library?
React Router is a JavaScript library used to handle client and server-side routing in React applications. 
It allows the creation of single-page web or mobile apps that allows navigation without the page refreshing.

_____________________________________________________________________________________________________
Refer this website :

https://v5.reactrouter.com/web/guides/primary-components

_____________________________________________________________________________________________________
NavLink :

 is similar to Link, but it has the ability to add additional styling attributes to the element. 
For example, you can use NavLink to style the active link differently than the other links. 
NavLink utilizes the "activeClassName" attribute. 
This is the class that will be applied to the element when it is active.

_____________________________________________________________________________________________________
What is the difference between link and route in React?

So in a nutshell, the Link component is responsible for the transition from state to state (page to page), 
while the Route component is responsible to act as a switch to display certain components based on route state

_____________________________________________________________________________________________________
What is the difference between BrowserRouter and link?

// BrowserRouter is the router implementation for HTML5 browsers (vs Native). 
// Link is your replacement for anchor tags. 
// Route is the conditionally shown component based on matching a path to a URL. 
// Switch returns only the first matching route rather than all matching routes.

_____________________________________________________________________________________________________
⭐⭐⭐✨💫
What is the difference between Link and NavLink?

The NavLink is used when you want to ""highlight"" a link as active. 

So, on every routing to a page, the link is highlighted according to the activeClassName . 
Link is for links that need no highlighting. 
And a is for external links.

_____________________________________________________________________________________________________
useParams() hook :

The useParams() hook is a React Router hook that allows you to access the parameters of the current URL. 
This can be useful if you want to dynamically render content based on the URL parameters. 
For example, if you have a blog application, 
you may want to render different articles based on the article ID in the URL.

_____________________________________________________________________________________________________
HOW TO CHANGE SIZE OF FONT AWESOME ICONS :

Larger Icons
To increase icon sizes relative to their container, 
use the fa-lg (33% increase), fa-2x , fa-3x , fa-4x , or fa-5x classes. 
If your icons are getting chopped off on top and bottom, 
make sure you have sufficient line-height.

_____________________________________________________________________________________________________

Relative Sizing Class	Font Size	Equivalent in Pixels
fa-2xs              	0.625em	        10px
fa-xs	                0.75em	        12px
fa-sm	                0.875em	        14px
fa-lg	                1.25em	        20px
fa-xl	                1.5em	        24px
fa-2xl              	2em	            32px

_____________________________________________________________________________________________________

Literal Sizing Class	Font Size
fa-1x                     1em
fa-2x                     2em
fa-3x                     3em
fa-4x                     4em
fa-5x                     5em
fa-6x                     6em
fa-7x                     7em
fa-8x                     8em
fa-9x                     9em
fa-10x                    10em
_____________________________________________________________________________________________________
_____________________________________________________________________________________________________
REDUX :

What is reducer and action in Redux?
Reducers, as the name suggests, 
take in two things: previous state and an action. 
Then they reduce it (read it return) to one entity: the new updated instance of state. 
So reducers are basically pure JS functions which take in the previous state and an action and return the newly updated state.

____________________________________________________________________________________________________________
What are actions in Redux?
Actions are the only source of information for the store as per Redux official documentation. 
It carries a payload of information from your application to store. 
As discussed earlier, 
actions are plain JavaScript object that must have a type attribute to indicate the type of action performed.

____________________________________________________________________________________________________________

What is the difference between action and reducer in React?
Reducer - is what manipulates that data when it recieves an action. 
Action - is what tells reducer to manipulate the store data, it carries the name and (not required) some data.27-Jan-2019

____________________________________________________________________________________________________________
What is dispatch vs reducer?
Dispatch​ You can think of dispatching actions as "triggering an event" in the application. 
Something happened, and we want the store to know about it. 
Reducers act like event listeners, 
and when they hear an action they are interested in, 
they update the state in response
____________________________________________________________________________________________________________
What are the 3 things in Redux?
There are three core components in Redux — actions, store, and reducers.
____________________________________________________________________________________________________________

in Redux :

reducers :
are used to STORE data
____________________________________________________________________________________________________________
To use REDUX IN OUR PROJECT:

wrap entire "app" with REDUX
____________________________________________________________________________________________________________
How do I import a route and Switch in react?

Nested Routing in React:

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import About from './about'
import Contact from './contact'
import Notfound from './notfound'
_____________________________________________________________________________________________________

