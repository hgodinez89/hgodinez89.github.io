import React from 'react'

export default (props) => {
  function closeAlert () {
    if (props.failure) {
        document.getElementById('failureAlert').display = 'none'
        document.getElementById('failureAlert').className =
          document.getElementById('failureAlert') + ' hidden'
    } else {
        document.getElementById('successAlert').display = 'none'
        document.getElementById('successAlert').className =
          document.getElementById('successAlert') + ' hidden'
    }
  }

  if (props.failure) {
    return (
      <div id='failureAlert' className='block text-left bg-red-100 border border-red-400 text-red-700 px-3 py-3 rounded relative' role='alert'>
        <strong className='font-bold'>{props.title}</strong>
        <span className='block sm:inline'>{props.message}</span>
        <button onClick={closeAlert} className='absolute top-0 bottom-0 right-0 px-1 py-3'><svg
                                                                  className='fill-current h-6 w-6 text-red-500'
                                                                  role='button'
                                                                  xmlns='http://www.w3.org/2000/svg'
                                                                  viewBox='0 0 20 20'> <title> Close </title><path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z'/> </svg></button>
      </div>
    )
  } else {
    return (
      <div id='successAlert' className='block text-left bg-green-100 border border-green-400 text-green-700 px-3 py-3 rounded relative' role='alert'>
        <strong className='text-sm font-bold'>{props.title}</strong>
        <span className='text-sm block sm:inline'>{props.message}</span>
        <button onClick={closeAlert} className='absolute top-0 bottom-0 right-0 px-1 py-3'><svg
                                                                  className='fill-current h-6 w-6 text-green-500'
                                                                  role='button'
                                                                  xmlns='http://www.w3.org/2000/svg'
                                                                  viewBox='0 0 20 20'> <title> Close </title><path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z'/> </svg></button>
      </div>
    )
  }
}
