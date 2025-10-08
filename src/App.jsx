import { Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Signup from './pages/signup'
import Login from './pages/login'
import './index.css'
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  return (
    <div className=" bg-white dark:bg-gray-900 dark:text-zinc-200">
        <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />}  />
        <Route path="/signup" element={<Signup />}  />
        </Routes>
    </div>
  )
}

export default App
