import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router,Routes,Route,Navigate,Link} from 'react-router-dom'


ReactDOM.render(
  <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/myapps' element={<Navigate replace to='/learn'/>} />
         
          <Route path='/learn' element={<Learn />} >
                   <Route path='/course' element={<p>Hello</p>} />
          </Route>
         
      </Routes>
  </Router>,
  document.getElementById('root')
);

function Home(){
  return (
    <div>
      <h1>Home Route</h1>
    </div>
  )
}

function Learn(){
  return (
    <div>
      <h1>Learn</h1>
      <h4>All courses are listed are here</h4>
      <Link className='btn btn-success' to='/learn/course'>Courses</Link>
      {"   "}
      <Link className='btn btn-primary' to='/learn/bundle'>Bundle</Link>
    </div>
  )
}

function Courses(){
  return (
    <div>
      <h1>Courses List</h1>
      <h1>Courses Card</h1>
    </div>
  )
}

function Bundles(){
  return (
    <div>
      <h1>Bundles List</h1>
      <h1>Bunldes Card</h1>
    </div>
  )
}