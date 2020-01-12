import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Translate from '../../utils/translate'

const seconds = 7000

var phraseArray = []
var opacityActual = 1
var phrasesJson
var year = new Date().getFullYear()

function getPhrasesArray () {
  if (phrasesJson) {
    return Object.entries(phrasesJson)
  }
}

setInterval(
  () => {

    if (phraseArray.length === 0) {
      phraseArray = getPhrasesArray()
    }

    if (phraseArray) {
      if (opacityActual === 0) {
         for (let i = 0; i < phraseArray.length; i++) {
           opacityActual = 1
           document.getElementById('phrase').style.opacity = opacityActual
           document.getElementById('author').style.opacity = opacityActual
           document.getElementById('phrase').innerHTML = '"' + phraseArray[i][1]['phrase'] + '"'
           document.getElementById('author').innerHTML = '- ' + phraseArray[i][1]['author'] + ' -'
           break
         }

         // Delete the first element
         phraseArray.shift()
      }
      else {
        opacityActual = 0
        document.getElementById('phrase').style.opacity = opacityActual
        document.getElementById('author').style.opacity = opacityActual
      }
    }
  },
  seconds
)

export default (props) => {
  phrasesJson = require(`../../data/locales/phrases_${props.codeLanguage}.json`)

  // Clean the array when load the page or change language
  phraseArray = []

  return (
    <div className='max-w-full bg-gray-900'>
      <div className='flex justify-center'>
        <button onClick={() => scrollTo('#top')} className='bg-gray-700 mt-6 hover:bg-blue-700 text-white font-bold px-3 py-2 -mt-8 rounded'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            width='28'
            height='28'>
            <path className='svgTop' d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            width='28'
            height='28'>
            <path className='svgTop' d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </button>
      </div>

      <div className='max-w-4xl mx-auto mt-2 h-40'>
        <div
          className='font-light italic text-center text-gray-100 pt-10 mx-2'
          data-sal='fade'
          data-sal-delay='300'
          data-sal-easing='easeOutCubic'>
          <p id='phrase' className='phraseAnimation'>
            "{Translate(props.codeLanguage, 'default_phrase')}"
          </p>
          <p id='author' className='phraseAnimation'>
            {Translate(props.codeLanguage, 'default_author')}
          </p>
        </div>
      </div>

      <div className='max-w-4xl mx-auto flex inline-block justify-center'>
        <a href='https://twitter.com/GodinezHanzel' className='socialIcon' target='_blank' rel='noopener noreferrer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z"/></svg>
        </a>
        <a href='https://github.com/hgodinez89' className='socialIcon' target='_blank' rel='noopener noreferrer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a href='https://medium.com/@hgodinez89' className='socialIcon' target='_blank' rel='noopener noreferrer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm-2.426 14.741h-3.574v-.202l1.261-1.529c.134-.139.195-.335.162-.526v-5.304c.015-.147-.041-.293-.151-.392l-1.121-1.35v-.201h3.479l2.689 5.897 2.364-5.897h3.317v.201l-.958.919c-.083.063-.124.166-.106.269v6.748c-.018.103.023.206.106.269l.936.919v.201h-4.706v-.201l.969-.941c.095-.095.095-.123.095-.269v-5.455l-2.695 6.844h-.364l-3.137-6.844v4.587c-.026.193.038.387.174.526l1.26 1.529v.202z"/></svg>
        </a>
        <a href='https://join.slack.com/t/hanzelgodinezdev/shared_invite/enQtOTAyNjM4MDg4MTY1LTVmOGI2NjI1MjE2Y2Q4YzgyOTI5Y2IzMDVmOWI3YmE4YmJjNmJhOWY0MDI1OTk2YzhlY2ZkYTZiN2M3MTcyMGE' className='socialIcon' target='_blank' rel='noopener noreferrer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm6.225 14.18l-1.418.474.49 1.467c.193.594-.122 1.24-.717 1.432-.671.19-1.253-.187-1.437-.715l-.49-1.469-2.924.979.49 1.468c.228.702-.253 1.483-1.068 1.483-.514 0-.934-.329-1.085-.767l-.492-1.468-1.418.472c-.662.192-1.251-.185-1.436-.717-.192-.593.123-1.24.718-1.432l1.418-.472-.945-2.814-1.419.472c-.79.224-1.492-.344-1.492-1.073 0-.477.297-.923.774-1.077l1.419-.472-.491-1.467c-.192-.595.123-1.242.719-1.434.595-.192 1.242.122 1.435.717l.492 1.467 2.923-.978-.49-1.468c-.235-.722.283-1.489 1.075-1.489.478 0 .925.297 1.08.773l.49 1.468 1.418-.472c.595-.193 1.243.123 1.436.717.193.594-.123 1.24-.718 1.432l-1.419.472.946 2.814 1.419-.472c.725-.234 1.492.282 1.492 1.072 0 .478-.297.923-.775 1.077zm-5.245-3.749l-2.922.977.944 2.816 2.923-.976-.945-2.817z"/></svg>
        </a>
        <a href='https://www.linkedin.com/in/hanzel-godinez-hidalgo-795a1418b' className='socialIcon' target='_blank' rel='noopener noreferrer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/></svg>
        </a>
      </div>

      <div className='max-w-4xl mx-auto flex inline-block justify-center mt-8 pb-16'>
        <p className='font-light text-sm text-gray-600'>{Translate(props.codeLanguage, 'short_name')}</p>
        <p className='font-light text-sm text-blue-600'>&nbsp;©{year}</p>
      </div>
    </div>
  )
}
