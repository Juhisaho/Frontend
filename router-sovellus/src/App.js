import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link >{' '}
        <Link to="/about">About</Link>{' '}
        <Link to="/contact">Contact</Link >{' '}
      <Switch>
        <Route exact path="/"   component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route render={()  => <h1>Page not found</h1>} />
      </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>This is home</h1>;
}

function About() {
  return <h1>This is about</h1>;
}

function Contact() {
  return <h1>This is contact</h1>;
}