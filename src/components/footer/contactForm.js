import React, {useState} from 'react';
import Alert from '../alert'
import imgAvatar from '../../imgs/avatar.jpg'
import Translate from '../../utils/translate'
import EmailJS from 'emailjs-com';

export default (props) => {
  
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [message, setMessage] = useState([]);
  const [phone, setPhone] = useState([]);
  const secrets = require('../../config/secrets')

  var sendProgress = false

  function valName(value) {
    if (value === null || value.length === 0 || /^\s+$/.test(value)) {
      document.getElementById('nameFormErr').innerHTML = Translate(props.codeLanguage, 'name_msg_error')
      return false
    } else {
      document.getElementById('nameFormErr').innerHTML = ''
      return true
    }
  }

  function valEmail(value) {
    if (!(/\S+@\S+\.\S+/.test(value))) {
      document.getElementById('emailFormErr').innerHTML = Translate(props.codeLanguage, 'email_msg_error')
      return false
    } else {
      document.getElementById('emailFormErr').innerHTML = ''
      return true
    }
  }

  function valMessage(value) {
    if (value === null || value.length < 10 || /^\s+$/.test(value)) {
      document.getElementById('messageFormErr').innerHTML = Translate(props.codeLanguage, 'message_msg_error')
      return false
    } else {
      document.getElementById('messageFormErr').innerHTML = ''
      return true
    }
  }

  const handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    if (name === 'name') {
      setName(value)
      valName(value)
    } else if (name === 'email') {
      setEmail(value)
      valEmail(value)
    } else if (name === 'message') {
      setMessage(value)
      valMessage(value)
    } else if (name === 'phone') {
      setPhone(value)
    }
    
  }

  const handleSubmit = event => {
    event.preventDefault()

    // Security Validation
    if (phone.length > 0) {
      return ''
    }
    
    if (valName(name) && valEmail(email) && valMessage(message)) {
      if (!sendProgress) {
        sendProgress = true
        document.getElementById('contactFormSuccessAlert').className =
          document.getElementById('contactFormSuccessAlert').className.replace('block', 'hidden')
        document.getElementById('contactFormErrorAlert').className =
          document.getElementById('contactFormErrorAlert').className.replace('block', 'hidden')
        document.getElementById('loading').className =
          document.getElementById('loading').className + ' fa fa-spinner fa-spin'
  
        let templateParams = {
          from_name: name,
          from_email: email,
          to_name: 'Hanzel Godinez H.',
          message_html: `<p>${message}</p>`
        };
  
        EmailJS.send(secrets.emailJS.service_id, secrets.emailJS.template_id, templateParams, secrets.emailJS.user_id)
        .then((resp) => {
          document.getElementById('loading').className =
            document.getElementById('loading').className.replace(' fa fa-spinner fa-spin', '')

          if (resp.status === 200) {
            setName('')
            setEmail('')
            setMessage('')
            
            document.getElementById('contactFormSuccessAlert').className =
              document.getElementById('contactFormSuccessAlert').className.replace('hidden', 'block')
          } else {
            document.getElementById('contactFormErrorAlert').className =
              document.getElementById('contactFormErrorAlert').className.replace('hidden', 'block')
          }
          
          sendProgress = false
        }, (err) => {
          sendProgress = false
          document.getElementById('contactFormErrorAlert').className =
            document.getElementById('contactFormErrorAlert').className.replace('hidden', 'block')
        });
      }
    }
  }

  return (
    <div className='flex justify-center px-6 mt-12 pb-24'>
      <div className='w-full xl:w-3/4 md:w-11/12 flex'>
        <div className='w-full h-auto pt-10 bg-blue-500 hidden md:block md:w-5/12 bg-cover rounded-l-lg'>
          <h3 className='text-xl text-gray-100 font-bold text-center'>{Translate(props.codeLanguage, 'contact_info')}</h3>
          <img src={imgAvatar} className='border rounded-full border-solid border-8 border-gray-600 w-40 h-40 mt-12 ml-12' alt="Hanzel's Avatar" />
          <div className='flex inline-block pt-10 ml-8'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='20'
              height='20'>
              <path className='heroicon-ui svgContact' d='M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z'
              />
            </svg>
            <p className='ml-3 mt-1 text-sm text-gray-200 font-light'>
              {Translate(props.codeLanguage, 'long_name')}
            </p>
          </div>
          <div className='flex inline-block pt-5 ml-8'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='20'
              height='20'>
              <path className='heroicon-ui svgContact' d='M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 0 1-.9 0L4 9.62V18h16V9.62z'
              />
            </svg>
            <a href='mailto:hgodinez89@hotmail.com' className='ml-3 text-sm text-gray-200 font-light hover:text-gray-900 hover:underline'>hgodinez89@hotmail.com</a>
          </div>
          <div className='flex inline-block pt-5 ml-8'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='20'
              height='20'>
              <path className='heroicon-ui svgContact' d='M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
              />
            </svg>
            <p className='ml-3 text-sm text-gray-200 font-light'>
              San José, Costa Rica
            </p>
          </div>
        </div>
        
        <div className='w-full md:w-7/12 bg-gray-100 p-5 rounded-lg md:rounded-l-none'>
          <h3 className='pt-4 font-light text-center'>{Translate(props.codeLanguage, 'tell_me')}</h3>
          <h3 className='font-light text-center'>{Translate(props.codeLanguage, 'write_me')}</h3>
          <form className='px-8 pt-6 pb-8 mb-4 bg-gray-100 rounded' onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='name'>
                {Translate(props.codeLanguage, 'name_label')}
              </label>
              <input
                className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                name='name'
                type='text'
                placeholder={Translate(props.codeLanguage, 'name_placeholder')} 
                value={name}
                onChange={handleInputChange} />
              <p id='nameFormErr' className='text-xs italic text-red-500 mt-2 ml-1' />
            </div>
            <div className='mb-4'>
              <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='email'>
                {Translate(props.codeLanguage, 'email_label')}
              </label>
              <input
                className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                name='email'
                type='email'
                placeholder={Translate(props.codeLanguage, 'email_placeholder')} 
                value={email}
                onChange={handleInputChange} />
              <p id='emailFormErr' className='text-xs italic text-red-500 mt-2 ml-1' />
            </div>
            <div className='mb-5'>
              <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='message'>
                {Translate(props.codeLanguage, 'message_label')}
              </label>
              <textarea
                className='w-full h-32 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                name='message'
                type='text'
                placeholder={Translate(props.codeLanguage, 'message_placeholder')} 
                value={message}
                onChange={handleInputChange} />
              <p id='messageFormErr' className='text-xs italic text-red-500 mt-1 ml-1' />
            </div>

            <label className='ohnohoney' htmlFor='phone'>
            </label>
            <textarea
              className='ohnohoney'
              name='phone'
              type='text'
              placeholder='Phone Number'
              value={phone}
              onChange={handleInputChange} />

            <div className='mb-3 text-center'>
              <button className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded' type='submit'>
                <i id='loading'></i>&nbsp;{Translate(props.codeLanguage, 'send_label')}
              </button>
              <div id='contactFormSuccessAlert' className='mt-4 hidden'>
                <Alert failure={false} title='' message={Translate(props.codeLanguage, 'message_success_alert')}/>
              </div>
              <div id='contactFormErrorAlert' className='mt-4 hidden'>
                <Alert failure={true} title='' message={Translate(props.codeLanguage, 'message_error_alert')}/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
