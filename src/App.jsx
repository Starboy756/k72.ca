import { Link, Route,Routes } from "react-router"
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'

const App = () => {
  return (
    <div className="text-white">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/agence" element={<Agence />}/>
        <Route path="/projects" element={<Projects />}/>
      </Routes>
    </div>
  )
}

export default App
