import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Certificate from './certificate'

export default (props) => {
  const data = useStaticQuery(graphql`{
        educationJson {
            data {
              certificates {
                title
                score
                code
              }
              courses {
                title
                progress
                url
              }
            }
        }
    }`)

  return (
    <div className='max-w-4xl mx-auto'>
      <header className='mt-20 mb-8 text-center'>
        <h2 className='text-3xl font-bold text-center'>Mis cursos online</h2>
      </header>
      <ul className='education-list'>
        {data.educationJson.data.certificates.map(certificate => {
           return <Certificate data={certificate} key={certificate.code} />
         })}
      </ul>
    </div>
  )
}
