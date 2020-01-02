import React from 'react'
import Avatar from '../imgs/avatar.jpg'

export default (props) => (
  <li className='flex items-center'>
    <div className='max-w-sm w-full lg:max-w-full lg:flex mb-4'>
      <div className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden' style={{backgroundImage: `url(${props.data.thumbnail})`}} title='Woman holding a mug'>
      </div>
      <div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
        <div className='mb-8'>
          {/* <p className='text-sm text-gray-600 flex items-center'>
            <svg className='fill-current text-gray-500 w-3 h-3 mr-2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
              <path d='M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z' />
            </svg>
            Members only
          </p> */}
          {/* https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=e4ad408f9fb2 */}
          {/* https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=81789e414dfc */}
          <div className='text-gray-900 font-bold text-lg mb-2'>
            {props.data.title.length <= 35 ? props.data.title : props.data.title.substring(0, 32) + '...'}
          </div>
          <p className='text-gray-700 text-base'>
            Si desea obtener mayor informacion...
          </p>
        </div>
        <div className='flex items-center'>
          <img className='w-10 h-10 rounded-full mr-4' src={Avatar} alt='Avatar of Author' />
          <div className='text-sm'>
            <p className='text-gray-900 leading-none'>
              {props.data.author}
            </p>
            <p className='text-gray-600'>
              {props.data.pubDate}
            </p>
          </div>
        </div>
      </div>
    </div>
   </li>
)
