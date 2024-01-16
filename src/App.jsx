import React from 'react'
import Navbar from './components/common/Navbar'
import Breadcrumb from './components/common/Breadcrumb'
import MainSection from './components/MainSection'
import FaqSection from './components/FAQ'

const App = () => {
  return (
    <div className='w-11/12 max-w-maxContent mx-auto'>
      <div className='px-[6.4375rem]'>

        <Navbar />
        <div className='mt-[4.5rem]'>
          <Breadcrumb />
        </div>

        <div className='mt-16'>
          <MainSection />
        </div>

        <div className='mt-[154px]'>
          <FaqSection />
        </div>

      </div>
    </div>
  )
}

export default App