import { useState } from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {

  return (
    <div className=' bg-background h-auto w-full max-w-screen-xl mx-auto '>
      <div className='flex max-w-screen-xl'>
        <Header/>
      </div>
      <div className=' flex justify-center flex-col gap-20 mt-32 '>
        <div className='flex justify-center'>
          <Hero />
        </div>

        <div className='flex flex-col-reverse items-center gap-20'>
          <div className=''>
            <Projects/>
          </div>
          <div className=''>
            <Skills />
          </div>
        </div>
        <div className='flex mb-6'>
          <Footer/>
        </div>
      </div>
      
    </div>
  )
}

export default App
