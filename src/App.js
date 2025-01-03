import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import DataInput from './components/DataInput/DataInput';
import History from './components/History/History';
import SignUp from './components/SignUp/SignUp';
import Menu from './components/Menu/Menu';
import './App.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1> Page Not Found</h1>
      <p> The page you are looking for does not exist.</p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<DataInput />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
