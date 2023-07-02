import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'
import SkillsTwo from './components/SkillsTwo'

function App() {

  return (
    <div className=' bg-background h-auto w-full max-w-screen-xl mx-auto selection:bg-pink-500 selection:text-zinc-800'>
      <div className='flex max-w-screen-xl'>
        <Header/>
      </div>
      <div className=' flex justify-center flex-col gap-20 mt-32 '>
        <div className=''>
          <Hero />
        </div>

        <div className='flex flex-col-reverse items-center gap-10 sm:gap-20'>
          <div className='' id='projects'>
            <Projects/>
          </div>
          <div className=''>
            <SkillsTwo/>
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
