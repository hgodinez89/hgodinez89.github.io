import React from 'react'
import Translate from '../utils/translate'

export default (props) => {
  return (
    <div className='max-w-4xl mx-auto mt-20'>
      <h2 id='porfolio' className='text-4xl font-bold text-center text-gray-800'>{Translate(props.codeLanguage, 'portfolio')}</h2>
      <div className='flex inline-block justify-center md:mt-20'>
        <p>Aca viene el portafolio de screen md en adelante</p>
      </div>
      <div className='flex justify-center mt-10 block md:hidden'>
      <p>Aca viene el portafolio de screen sm</p>
      </div>
    </div>
  )
}
