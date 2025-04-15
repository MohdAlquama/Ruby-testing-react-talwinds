import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // make sure to import these
import App from './App';
import Homepage from './component/Homepage';
import './index.css';
import Menpage from './component/Men page/Menpage';
import Womenpage from './component/Men page/womenpage';
import Xyz from './component/Xyz';
import Logincard from './logincard';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Routeeee() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<h1>Welcome</h1>} />
        <Route path="/app" element={<App />} /> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/men" element={<Menpage/>} />
        <Route path="/women" element={<Womenpage />} />
        <Route path="/Xyz" element={<Xyz/>}/>
        <Route path="/logincard" element={<Logincard/>}/>
        <Route path="/loginfrom" element={<Loginfrom/>}/>

      </Routes>
    </BrowserRouter>
  );
}

root.render(<Routeeee />);
