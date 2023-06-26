import { useState } from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import Skills from './components/Skills'

function App() {

  return (
    <div className=' bg-background mx-auto h-screen'>
      <Header/>
      <div className=' flex justify-center flex-col '>
        <Hero />
        <Skills />
      </div>
      
    </div>
  )
}

export default App
