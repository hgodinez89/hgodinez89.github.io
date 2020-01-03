import React from 'react'
import Bar from './charts/bar'
import Colors from '../helpers/colors'

export default (props) => {
  const barData = require('../data/skills/programming').default
  const withResponsiveness = require('../helpers/withResponsiveness').default
  const ResponsiveBarChart = withResponsiveness(Bar)

  return (
    <div className='max-w-4xl mx-auto mt-20'>
      <h2 id='skills' className='text-4xl font-bold text-center text-gray-800'>Skills</h2>
      <h2 id='skills' className='text-xl font-light text-center text-gray-700 mt-20'>Programming Languages</h2>
      <div
        className='max-w-4xl mx-auto md:hidden'
        data-sal='fade'
        data-sal-delay='300'
        data-sal-easing='easeOutCubic'>
        <ResponsiveBarChart
          data={barData.programmingLanguages(props.codeLanguage)}
          isHorizontal={true}
          height={400}
          betweenBarsPadding={0.3}
          hasPercentage={true}
          colorSchema={Colors.blueGrey}
          margin={{ left: 100, right: 40, top: 40, bottom: 40 }} />
      </div>
      <div
        className='max-w-4xl mx-auto hidden md:block'
        data-sal='fade'
        data-sal-delay='300'
        data-sal-easing='easeOutCubic'>
        <ResponsiveBarChart
          data={barData.programmingLanguages(props.codeLanguage)}
          isHorizontal={false}
          height={400}
          betweenBarsPadding={0.3}
          hasPercentage={true}
          colorSchema={Colors.blueGrey}
          margin={{ left: 100, right: 40, top: 40, bottom: 40 }} />
      </div>
      {/* <h2 id='skills' className='text-xl font-bold text-center text-gray-700 mt-2'>Programming Languages</h2> */}
    </div>
  )
}
