import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Students from './pages/Students/Students'
import StudentNew from './pages/StudentNew/StudentNew'
import StudentView from './pages/StudentView/StudentView'
import StudentEdit from './pages/StudentEdit/StudentEdit'
import About from './pages/About/About'

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/new" element={<StudentNew />} />
          <Route path="/students/:id" element={<StudentView />} />
          <Route path="/students/:id/edit" element={<StudentEdit />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
