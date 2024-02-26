import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Ensure to import Route and Routes
import First from './Components/First';
import Second from './Components/Second';
import Data from './Components/Data.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Data />}/>
        <Route path="/first-page" element={<First />} /> {/* Use element prop to specify the component */}
        <Route path="/second-page" element={<Second />} />
      </Routes>
    </Router>
  );
}

export default App;

