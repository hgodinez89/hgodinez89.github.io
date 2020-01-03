import React from 'react'
import CardAbout from './cardAbout'

export default (props) => {
  return (
    <div className='max-w-4xl mx-auto mt-20'>
      <p className='hidden xs:block'>
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
      </p>
      <h2 id='about' className='text-4xl font-bold text-center text-gray-800'>About Me</h2>
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
        <div className='ml-0 mt-12 md:ml-10 lg:ml-20'
             data-sal='slide-left'
             data-sal-delay='300'
             data-sal-easing='easeInSine'>
          <h3 className='text-2xl font-bold text-center text-gray-700'>Hi, I’m Hanzel Godinez.</h3>
          <h3 className='text-2xl font-bold text-center text-gray-700'>Nice to meet you.</h3>

          <div className='text-base font-light text-center text-gray-700 mt-5 hidden md:block'>
            <p >Soy un desarrollador de software apasionado por lo que hace,</p>
            <p>que a su vez ama la tecnología, la lectura y el continuo</p>
            <p>aprendizaje de nuevas cosas, tengo una experiencia</p>
            <p>profesional de 12 años, en los cuales he tenido la</p>
            <p>oportunidad participar en cosas bastante intereses, en roles</p>
            <p>como desarrollador de software, arquitecto o líder de equipo,</p>
            <p>lo cual me ha permitido aprender muchísimo de los demás y</p>
            <p>compartir muchos conocimientos.</p>
          </div>

          <div className='text-base font-light text-start text-gray-700 ml-3 mt-5 block md:hidden'>
            <p>Soy un desarrollador de software</p>
            <p>apasionado por lo que hace, que </p>
            <p>que a su vez ama la tecnología, la</p>
            <p>lectura y el continuo aprendizaje de</p>
            <p>nuevas cosas, tengo una experiencia</p>
            <p>profesional de 12 años, en los cuales</p>
            <p>he tenido la oportunidad participar en</p>
            <p>cosas bastante intereses, en roles como</p>
            <p>desarrollador de software, arquitecto o</p>
            <p>líder de equipo, lo cual me ha permitido</p>
            <p>aprender muchísimo de los demás y</p>
            <p>compartir muchos conocimientos.</p>
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
