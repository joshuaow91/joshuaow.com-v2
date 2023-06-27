import { useState } from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {

  return (
    <div className=' bg-background h-auto '>
      <div className='flex'>
        <Header/>
      </div>
      <div className=' flex justify-center flex-col gap-20 mt-20'>
        <div className='flex '>
          <Hero />
        </div>
        <div className='flex'>
        <Skills />
        </div>
        <div className='w-3/4  mx-auto'>
          <Projects/>
        </div>
      </div>
      
    </div>
  )
}

export default App
