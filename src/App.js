

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About/About.jsx';
import Projects from './components/Projects/Projects.jsx';
// import Projects from './components/Projects/ProjectCard.jsx';
import Contact from './components/Contact.jsx';
import Experience from './components/Experience/Experience.jsx';
import './App.css'; // This links the CSS to the App.js file


const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Experience" element={<Experience/>} />

            </Routes>
        </Router>
    );
};

export default App;






// import logo from './logo.svg';
// import './App.css';
// import React, { useRef } from 'react'
// import { useState } from 'react';

// function App() {

//           // const name=useRef(null);
//           // const handle=(e)=>{
//           //   e.preventDefault()
//           //   console.log(name.current.value)
//           // }

//           const[val,set]=useState({form:"",input:""});

//     const handler=(event)=>{
//       set(prev=>{
//          return {
//           ...prev,
//           [event.target.name]: event.target.value
//                        }
//       });
//      }
//      const save=(event)=>{
//         event.preventDefault();
//         console.log(val);
//      }

//   return (
  
//     <>
//       <form>
//         <input className='m-5 bg-green-400 w-40 rounded-full flex items-center'
//            type="text"
//            placeholder='aman'
//            name="form" 
//            onChange={handler}
//            value={val.form}
//           />
//          <input onClick={save}  type="submit"/>
//       </form>
//     <div className='m-5 bg-blue-600 w-40 h-40 rounded-full text-center'>
//        <h1 className='m-6' >hello</h1>
//        <input className=' w-40 h-10 name="input" bg-red-400 mt-5 rounded-full'
//          type="text"
//          onChange={handler} 
//          placeholder='aman '
//          name="first"
//          value={val.input}a
//         />
//     </div>
  
//     </>
//   )
// }

// export default App;
