import { Link } from 'gatsby'
import React, { useState } from 'react'
import unsplash from '../imgs/unsplash.jpg'
import language from '../imgs/language.png'

export default () => {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
      <header className='bg-black' style={{height: '100vh', backgroundSize: 'cover', backgroundImage: `url(${unsplash})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundAttachment: 'fixed'}}>
        <nav className='flex items-center justify-between flex-wrap p-6'>
          <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <a href='/' className='flex inline-block'>
              <p className='text-4xl font-bold text-white'>&lt;/</p>
              <p className='text-4xl font-bold text-blue-500'>&gt;</p>
            </a>
          </div>
          <div className='block lg:hidden'>
            <button onClick={() => toggleExpansion(!isExpanded)} className='flex items-center px-3 py-2 border rounded text-white border-blue-500 hover:text-white hover:border-white'>
              <svg className='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <title>
                  Header
                </title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
              </svg>
            </button>
          </div>
          <div className={`${ isExpanded ? `block` : `hidden` } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
            <div className='text-sm lg:flex-grow'>
              <Link to={`/page-2`} href='#responsive-header' className='block ml-5 mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-500 mr-4'> About
              </Link>
              <Link to={`/page-2`} className='block ml-5 mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-500 mr-4'> Skills
              </Link>
              <Link to={`/page-2`} className='block ml-5 mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-500'> Portfolio
              </Link>
            </div>
            <div>
              <a href='#download' className='flex inline-block text-sm px-4 py-2 leading-none text-white border-none hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded mt-2 lg:border-solid border-white border rounded mt-0'>
                <img className='w-6' src={language} alt='Language'/><p className='ml-1 mr-2 mt-1 text-white'>Spanish</p>
              </a>
            </div>
          </div>
        </nav>
        
        <div className='flex content-start flex-wrap justify-center mt-32 md:mt-56'>
          <div className='flex'>
            <div className='flex-1'>
              <h1 className='font-bold text-white sm:font-bold text-white text-4xl flex justify-center md:text-5xl lg:text-6xl xl:text-6xl'>Hello, I am Hanzel</h1>
              <p className='text-white sm:text-white text-xs font-normal flex justify-center md:text-sm font-normal lg:text-lg font-normal xl:text-lg font-normal'>
                I am a multidisciplinary software developer and <p className='hidden md:block'>I love what I do</p>
              </p>
              <p className='text-white text-xs font-normal flex justify-center md:hidden'>
                I love what I do
              </p>
              <div className='container mx-auto px-32 md:hidden'>
                <button className="bg-blue-500 mt-5 hover:bg-blue-700 text-white font-normal text-xs py-2 px-12 rounded">
                  Contact
                </button>
              </div>
              <div className='container mx-auto px-32 hidden md:block'>
                <button className="bg-blue-500 mt-6 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}