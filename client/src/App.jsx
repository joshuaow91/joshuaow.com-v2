import { useState } from 'react'
import Hero from './components/Hero'
import Header from './components/Header'

function App() {

  return (
    <div className=' bg-background mx-auto h-screen'>
      <Header/>
      <div className='mt-16 mx-8 py-24 max-w-screen-2xl flex justify-center '>
        <Hero />
      </div>
      
    </div>
  )
}

export default App
