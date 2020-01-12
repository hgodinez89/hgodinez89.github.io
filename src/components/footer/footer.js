import React from 'react'
import ContactForm from './contactForm'
import Social from './social'
import Translate from '../../utils/translate'

export default (props) => {
  return (
    <div className='max-w-full mt-24 bg-gray-800'>
      <div className='max-w-4xl mx-auto'>
        <h2 id='contact' className='text-3xl font-bold text-center text-white pt-16'>{Translate(props.codeLanguage, 'contact_me')}</h2>
        <div className='h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded' />
        <ContactForm codeLanguage={props.codeLanguage}/>
      </div>
      <Social codeLanguage={props.codeLanguage}/>
    </div>
  )
}
