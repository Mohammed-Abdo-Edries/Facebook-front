import { Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Signup from './pages/signup'
import Login from './pages/login'
// import NotFound from "./pages/NotFound"
import { useAuthContext } from './hooks/useAuthContext'
import './index.css'
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  const { user } = useAuthContext()
  // const Navigate = useNavigate()
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
        {/* <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} /> */}
          {/* <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} /> */}
          {/* <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} /> */}
        </Routes>
        {/* <Footer /> */}
    </div>
  )
}

export default App
