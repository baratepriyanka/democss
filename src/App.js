
// import React from "react";
// import ReactDOM from "react-dom";
// import {  BrowserRouter as Router, Routes,Route } from "react-router-dom";
// import { ChakraProvider } from "@chakra-ui/react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useState  } from "react";
// import './App.css';

// import Login from "./Component/Auth/Login";
// import LoginDemo from "./Component/Auth/Logincopy";
// import Demo from "./Component/Auth/Demo";
// import Demo1 from "./Component/Auth/Demo1";
// import Demo2 from "./Component/Auth/Demo2";
// import Demo3 from "./Component/Auth/Demo3";
// import Demo4 from "./Component/Auth/Demo4";
// import Demo5 from "./Component/Auth/Demo5";

// function App() {
//   const [alert, setAlert] = useState({message:"", type:""})
//   const showAlert = (message, type) => {
//     if (type === 'danger') {
//       toast.error(message)
//       console.log("hit")
//     } else if (type === 'success'){
//       toast.success(message)
//     }
//   }
//   return (
//     <>
//      <ChakraProvider>
//       <Router>
//       <ToastContainer autoClose={3000}/>
//         <Routes>
//           {/* <Route  path="/" element={<Login  showAlert={showAlert}/>} /> */}
//           <Route  path="/" element={<LoginDemo showAlert={showAlert}/>} />
//           <Route  path="/demo" element={<Demo showAlert={showAlert}/>} />
//           <Route  path="/demo1" element={<Demo1 showAlert={showAlert}/>} />
//           <Route  path="/demo2" element={<Demo2 showAlert={showAlert}/>} />
//           <Route  path="/demo3" element={<Demo3 showAlert={showAlert}/>} />
//           <Route  path="/demo4" element={<Demo4 showAlert={showAlert}/>} />
//           <Route  path="/demo5" element={<Demo5 showAlert={showAlert}/>} />
          
          
//         </Routes>
//       </Router>
//     </ChakraProvider>
//     </>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';

import LoginDemo from "./Component/Auth/Logincopy";
import Demo from "./Component/Auth/Demo";
import Demo1 from "./Component/Auth/Demo1";
import Demo2 from "./Component/Auth/Demo2";
import Demo3 from "./Component/Auth/Demo3";
import Demo4 from "./Component/Auth/Demo4";
import Demo5 from "./Component/Auth/Demo5";
import Demo6 from "./Component/Auth/Demo6";

function App() {
  const [alert, setAlert] = useState({ message: "", type: "" });

  const showAlert = (message, type) => {
    if (type === 'danger') {
      toast.error(message);
      console.log("hit");
    } else if (type === 'success') {
      toast.success(message);
    }
  };

 

  return (
    <div data-testid="app">
      <ChakraProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<LoginDemo showAlert={showAlert} />} />
            <Route path="/demo" element={<Demo showAlert={showAlert} />} />
            <Route path="/demo1" element={<Demo1 showAlert={showAlert} />} />
            <Route path="/demo2" element={<Demo2 showAlert={showAlert} />} />
            <Route path="/demo3" element={<Demo3 showAlert={showAlert} />} />
            <Route path="/demo4" element={<Demo4 showAlert={showAlert} />} />
            <Route path="/demo5" element={<Demo5 showAlert={showAlert} />} />
            <Route path="/demo6" element={<Demo6 showAlert={showAlert} />} />
          </Routes>
        </HashRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
