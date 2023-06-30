import { useState } from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {

  return (
    <div className=' bg-background h-auto w-full max-w-screen-xl mx-auto '>
      <div className='flex max-w-screen-xl'>
        <Header/>
      </div>
      <div className=' flex justify-center flex-col gap-10 mt-32 '>
        <div className='flex justify-center'>
          <Hero />
        </div>

        <div className='flex flex-col-reverse items-center'>
          <div className=''>
            <Projects/>
          </div>
          <div className=''>
            <Skills />
          </div>
        </div>
        <div className='flex '>
          
        </div>
      </div>
      
    </div>
  )
}

export default App
