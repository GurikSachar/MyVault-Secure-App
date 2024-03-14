import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Documents from './pages/Documents'
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const {user} = useAuthContext()

  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={!user ? <Home/> : <Navigate to="/documents"/>}/>
          <Route path="/signup" element={!user ? <Signup/> : <Navigate to="/documents"/>}/>
          <Route path="/login" element={!user ? <Login/> : <Navigate to="/documents"/>}/>
          <Route path="/documents" element={user ? <Documents/> : <Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
