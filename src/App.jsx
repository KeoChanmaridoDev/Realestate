import React from 'react'
import Header from './componet/header'
import About from './componet/About'
import Project from './componet/Project'
import Testimonail from './componet/Testimonail'
import Contact from './componet/Contact'
import { ToastContainer} from 'react-toastify';
import Footer from './componet/footer'
const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About />
      <Project/>
      <Testimonail/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
