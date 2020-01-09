import React from 'react'
import Translate from '../../utils/translate'
import CardPortfolio from './cardPortfolio'

export default (props) => {
  return (
    <div className='w-10/12 md:max-w-6xl mx-auto mt-20'>
      <h2 id='porfolio' className='text-4xl font-bold text-center text-gray-800'>{Translate(props.codeLanguage, 'portfolio')}</h2>
      <div class='flex justify-center'>
        <p className='mt-6 text-base font-light text-center text-gray-700 md:mt-20'>
          These are some of my projects
        </p>
      </div>
      <div class='h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded' />
      <div
        class='flex inline-block justify-center mt-8 md:mt-12'
        data-sal='zoom-out'
        data-sal-delay='300'
        data-sal-easing='easeInOutQuart'>
        <div class='flex inline-block overflow-x-scroll'>
          <CardPortfolio/>
        </div>
      </div>
    </div>
  )
}
