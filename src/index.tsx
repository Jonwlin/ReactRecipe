import * as React from 'react';
import ReactDOM from 'react-dom';
import  {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import reportWebVitals from './client/telemetry/reportWebVitals';
import Recipes from "./client/Recipes"
import Travel from "./client/Travel"
import Profile from './client/Profile'

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>   
        <Routes>
          <Route path="/" element={<Profile />}/>
          <Route path="recipes" element={<Recipes />} />
          <Route path="Travel" element={<Travel />} />
        </Routes> 
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
