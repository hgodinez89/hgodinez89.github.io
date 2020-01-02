import React from 'react'
import Topcard from '../imgs/card-top.jpg'

export default (props) => (
  <li className='flex items-center'>
    <div className='max-w-sm rounded overflow-hidden shadow-lg mb-6'>
      <img className='w-full' src={Topcard} alt='Sunset in the mountains' />
      <div className='px-6 py-4'>
        <div className='font-bold text-base mb-2'>
          <a href={props.data.url} target='_blank' rel='noopener noreferrer'>
            {props.data.title.length <= 26 ? props.data.title : props.data.title.substring(0, 26) + '...'}
          </a>
        </div>
      </div>
      <div className='px-6 py-4'>
        <span className='inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>Progreso: {props.data.progress}</span>
      </div>
    </div>
  </li>
)
