import React from 'react'
import Bar from './bar'
import Colors from '../../helpers/colors'

export default (props) => {
  const barData = require('../../data/skills/programming').default
  const withResponsiveness = require('../../helpers/withResponsiveness.js').default
  const ResponsiveBarChart = withResponsiveness(Bar)

  return (
    
    

    <div className='max-w-4xl mx-auto mt-20'>
      <ResponsiveBarChart
        data={barData.programmingLanguages(props.codeLanguage)}
        isHorizontal={false}
        height={400}
        betweenBarsPadding={0.3}
        hasPercentage={true}
        colorSchema={Colors.blueGrey}
        margin={{ left: 100, right: 40, top: 40, bottom: 40 }} 
        />
    </div>
  )
}
