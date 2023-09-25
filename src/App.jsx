import './App.scss'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home, Work, About, Contact, Navbar } from './components/import'

function App() {

  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
