import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/login/login'

function App() {
  return (
    <BrowserRouter>
      <div className='layout'>
      <Routes>
         <Route path="/" element={<Login />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
