
import './App.css'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Info } from './components/Info'
import { Interests } from './components/Interests'

import { FaEnvelope, FaLinkedin } from "react-icons/fa"

function App() {

  return (
    <>
      <Info />
      <About />
      <Interests />
      <Footer />
    </>
  )
}

export default App
