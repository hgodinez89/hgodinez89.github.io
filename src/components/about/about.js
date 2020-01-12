import React from 'react'
import CardAbout from './cardAbout'
import Translate from '../../utils/translate'

export default (props) => {
  return (
    <div className='max-w-4xl mx-auto mt-20'>
      {/* <p className='hidden xs:block'>
        XS
      </p>
      <p className='hidden sm:block'>
        SM
      </p>
      <p className='hidden md:block'>
        MD
      </p>
      <p className='hidden lg:block'>
        LG
      </p>
      <p className='hidden xl:block'>
        XL
      </p> */}
      <h2 id='about' className='text-4xl font-bold text-center text-gray-800'>{Translate(props.codeLanguage, 'about')}</h2>
      <div className='flex inline-block justify-center md:mt-20'>
        <div className='rounded overflow-hidden shadow-lg hidden md:block' style={{height: '420px', width: '285px'}}
             data-sal='slide-right'
             data-sal-delay='300'
             data-sal-easing='easeInSine'>
          <CardAbout
            idImg='toggleImageMD'
            idCheckbox='toggleCheckBoxMD'
            height='380px'
            width='285px' />
        </div>
        <div className='ml-0 mt-12 md:ml-6 lg:ml-20'
             data-sal='slide-left'
             data-sal-delay='300'
             data-sal-easing='easeInSine'>
          <h3 className='text-2xl font-bold text-center text-gray-700'>{Translate(props.codeLanguage, 'introduce_h1')}</h3>
          <h3 className='text-2xl font-bold text-center text-gray-700'>{Translate(props.codeLanguage, 'introduce_h2')}</h3>

          <div className='text-base font-light text-center text-gray-700 mt-5 hidden md:block'>
            <p>{Translate(props.codeLanguage, 'introduce_p1')}</p>
            <p>{Translate(props.codeLanguage, 'introduce_p2')}</p>
            <p>{Translate(props.codeLanguage, 'introduce_p3')}</p>
            <p>{Translate(props.codeLanguage, 'introduce_p4')}</p>
            <p>{Translate(props.codeLanguage, 'introduce_p5')}</p>
            <p>{Translate(props.codeLanguage, 'introduce_p6')}</p>
            <p>{Translate(props.codeLanguage, 'introduce_p7')}</p>
            <p>{Translate(props.codeLanguage, 'introduce_p8')}</p>
          </div>

          <div className='text-base font-light text-center text-gray-700 ml-3 mt-5 block md:hidden'>
            <p>{Translate(props.codeLanguage, 'introduce_pm1')}</p>
            <p>{Translate(props.codeLanguage, 'introduce_pm2')}</p>
            <p>{Translate(props.codeLanguage, 'introduce_pm3')}</p>
            <p>{Translate(props.codeLanguage, 'introduce_pm4')}</p>
            <p>{Translate(props.codeLanguage, 'introduce_pm5')}</p>
            <p>{Translate(props.codeLanguage, 'introduce_pm6')}</p>
            <p>{Translate(props.codeLanguage, 'introduce_pm7')}</p>
            <p>{Translate(props.codeLanguage, 'introduce_pm8')}</p>
            <p>{Translate(props.codeLanguage, 'introduce_pm9')}</p>
            <p>{Translate(props.codeLanguage, 'introduce_pm10')}</p>
            <p>{Translate(props.codeLanguage, 'introduce_pm11')}</p>
            <p>{Translate(props.codeLanguage, 'introduce_pm12')}</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-10 block md:hidden'>
        <div className='rounded overflow-hidden shadow-lg' style={{height: '353px', width: '235px'}}
             data-sal='slide-right'
             data-sal-delay='300'
             data-sal-easing='easeInSine'>
          <CardAbout
            idImg='toggleImageSM'
            idCheckbox='toggleCheckBoxSM'
            height='313px'
            width='235px' />
        </div>
      </div>
    </div>
  )
}
