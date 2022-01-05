import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Dashboard from './pages/dashboard/home';
import AccountEdit from './pages/dashboard/edit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/edit" element={<AccountEdit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
