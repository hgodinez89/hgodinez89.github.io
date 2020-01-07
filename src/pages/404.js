import React from 'react'
import { Link } from 'gatsby'
import Img404 from '../imgs/404.png'
import Translate from '../utils/translate'

export default (props) => {
  const codeLanguage = 'en'
  const languages = require('../data/languages');

  return (
    <div className='max-w-full'>
      <div className='flex items-center flex-shrink-0 text-white ml-6 mt-6'>
        <Link to={codeLanguage === languages.defaultLangKey ? '/' : '/es'} className='flex inline-block'>
          <p className='text-4xl font-bold text-black'>&lt;/</p>
          <p className='text-4xl font-bold text-blue-500'>&gt;</p>
        </Link>
      </div>
      <div className='flex inline-block justify-center mt-40 hidden md:flex inline-block justify-center'>
        <h1 className='font-bold text-gray-700' style={{fontSize: '12.0rem'}}>4</h1>
        <img src={Img404} className='border rounded-full border-solid border-8 border-gray-600 w-40 h-40 mt-16' alt='404'/>
        <h1 className='font-bold text-gray-700' style={{fontSize: '12.0rem'}}>4</h1>
      </div>
      
      <div className='flex inline-block justify-center mt-32 block md:hidden'>
        <h1 className='font-bold text-gray-700' style={{fontSize: '6.0rem'}}>4</h1>
        <img src={Img404} className='border rounded-full border-solid border-8 border-gray-600 w24 h-24 mt-8' alt='404'/>
        <h1 className='font-bold text-gray-700' style={{fontSize: '6.0rem'}}>4</h1>
      </div>
  
      <div className='block text-center'>
        <h2 className='font-light text-gray-700 mb-8'>{Translate(codeLanguage, 'page_not_found')}</h2>
        <Link to={codeLanguage === languages.defaultLangKey ? '/' : '/es'} className="bg-blue-500 hover:bg-blue-700 text-white font-normal text-base py-2 px-12 rounded">
          {Translate(codeLanguage, 'back_home')}
        </Link>
      </div>
      
    </div>
  )
}
