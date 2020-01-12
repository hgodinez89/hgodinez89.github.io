import { Link } from 'gatsby'
import React, { useState } from 'react'
import Translate from '../utils/translate'
import unsplash from '../imgs/unsplash.jpg'
import scrollTo from 'gatsby-plugin-smoothscroll';

export default (props) => {
  const [isExpanded, toggleExpansion] = useState(false)
  const languages = require('../data/languages');

  return (
      <header id='top' className='bg-black' style={{height: '100vh', backgroundSize: 'cover', backgroundImage: `url(${unsplash})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundAttachment: 'fixed'}}>
        <nav className='flex items-center justify-between flex-wrap p-6'>
          <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <Link to={props.codeLanguage === languages.defaultLangKey ? '/' : '/es'} className='flex inline-block'>
              <p className='text-4xl font-bold text-white'>&lt;/</p>
              <p className='text-4xl font-bold text-blue-500'>&gt;</p>
            </Link>
          </div>
          <div className='block lg:hidden'>
            <button onClick={() => toggleExpansion(!isExpanded)} className='flex items-center px-3 py-2 border rounded text-white border-blue-500 hover:text-white hover:border-white'>
              <svg className='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <title>
                {Translate(props.codeLanguage, 'header')}
                </title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
              </svg>
            </button>
          </div>
          <div className={`${ isExpanded ? `block` : `hidden` } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
            <div className='text-sm lg:flex-grow'>
              <button onClick={() => scrollTo('#about')} className='block ml-5 mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-500 mr-4'> {Translate(props.codeLanguage, 'about_mn')}
              </button>
              <button onClick={() => scrollTo('#skills')} className='block ml-5 mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-500 mr-4'> {Translate(props.codeLanguage, 'skills_mn')}
              </button>
              <button onClick={() => scrollTo('#porfolio')} className='block ml-5 mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-500'> {Translate(props.codeLanguage, 'portfolio_mn')}
              </button>
            </div>
            <div className='flex inline-block'>
              <Link to={props.codeLanguage === languages.defaultLangKey ? '/es' : '/'} className='flex inline-block text-sm px-4 py-2 leading-none text-white border-none hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded mt-2 lg:border-solid border-white border rounded mt-0'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='svgTop'><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z"/></svg>
                <p className='ml-2 mr-1 mt-1 text-white'>{Translate(props.codeLanguage, 'language_mn')}</p>
              </Link>
            </div>
          </div>
        </nav>
        
        <div className='flex content-start flex-wrap justify-center mt-32 md:mt-56'>
          <div className='flex'>
            <div className='flex-1'>
              <h1 className='font-bold text-white sm:font-bold text-white text-4xl flex justify-center md:text-5xl lg:text-6xl xl:text-6xl'>{Translate(props.codeLanguage, 'greeting')}</h1>
              <div className='flex inline-block justify-center'>
                <p className='text-white sm:text-white text-xs font-normal flex justify-center md:text-sm font-normal lg:text-lg font-normal xl:text-lg font-normal'>
                  {Translate(props.codeLanguage, 'description_1')}
                </p>
                <p className='text-white sm:text-white text-xs font-normal flex justify-center md:text-sm font-normal lg:text-lg font-normal xl:text-lg font-normal hidden md:block'>&nbsp;{Translate(props.codeLanguage, 'description_2')}</p>
              </div>
              <p className='text-white text-xs font-normal flex justify-center md:hidden'>
                {Translate(props.codeLanguage, 'description_2')}
              </p>
              <div className='container mx-auto px-32 md:hidden'>
                <button onClick={() => scrollTo('#contact')} className="bg-blue-500 mt-5 hover:bg-blue-700 text-white font-normal text-xs py-2 px-12 rounded">
                {Translate(props.codeLanguage, 'contact_1')}
                </button>
              </div>
              <div className='container mx-auto px-32 hidden md:block'>
                <button onClick={() => scrollTo('#contact')} className="bg-blue-500 mt-6 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded">
                  {Translate(props.codeLanguage, 'contact_2')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}