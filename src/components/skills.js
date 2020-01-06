import React from 'react'
import Bar from './charts/bar'
import Colors from '../helpers/colors'
import Translate from '../utils/translate'

var currentIndexGraph = 1
var previousIndexGraph = null
var countMaxGraph = 5
var widthSlideShowF = 896
var previousCodeLanguage = null

function currentSlide (e) {
  previousIndexGraph = currentIndexGraph
  currentIndexGraph = e.target.dataset.message
  nextGraph()
  previousIndexGraph = null
}

function prevGraph () {
  if (currentIndexGraph > 1) {
    document.getElementById(`graph_title_${currentIndexGraph}`).style.display = 'none'
    document.getElementById(`f_graph_${currentIndexGraph}`).className =
      document.getElementById(`f_graph_${currentIndexGraph}`).className.replace(' lg:block', '')
    document.getElementById(`m_graph_${currentIndexGraph}`).className =
      document.getElementById(`m_graph_${currentIndexGraph}`).className.replace(' sm:hidden md:block lg:hidden xl:hidden', '')
    document.getElementById(`s_graph_${currentIndexGraph}`).className =
      document.getElementById(`s_graph_${currentIndexGraph}`).className.replace('md:hidden', 'hidden')
    document.getElementById(`dot_${currentIndexGraph - 1}`).className =
      document.getElementById(`dot_${currentIndexGraph - 1}`).className.replace(' active', '')

    currentIndexGraph--

    document.getElementById(`graph_title_${currentIndexGraph}`).style.display = 'block'
    document.getElementById(`f_graph_${currentIndexGraph}`).className += ' lg:block'
    document.getElementById(`m_graph_${currentIndexGraph}`).className += ' sm:hidden md:block lg:hidden xl:hidden'
    document.getElementById(`s_graph_${currentIndexGraph}`).className =
      document.getElementById(`s_graph_${currentIndexGraph}`).className.replace('hidden', 'md:hidden')
    document.getElementById(`graph_title_${currentIndexGraph}`).style.display = 'block'
    document.getElementById(`dot_${currentIndexGraph - 1}`).className += ' active'
  }
}

function nextGraph () {
  let indexGraph = previousIndexGraph ? previousIndexGraph : currentIndexGraph

  if (currentIndexGraph < countMaxGraph) {
    document.getElementById(`graph_title_${indexGraph}`).style.display = 'none'
    document.getElementById(`f_graph_${indexGraph}`).className =
      document.getElementById(`f_graph_${indexGraph}`).className.replace(' lg:block', '')
    document.getElementById(`m_graph_${indexGraph}`).className =
      document.getElementById(`m_graph_${indexGraph}`).className.replace(' sm:hidden md:block lg:hidden xl:hidden', '')
    document.getElementById(`s_graph_${indexGraph}`).className =
      document.getElementById(`s_graph_${indexGraph}`).className.replace('md:hidden', 'hidden')
    document.getElementById(`dot_${indexGraph - 1}`).className =
      document.getElementById(`dot_${indexGraph - 1}`).className.replace(' active', '')

    currentIndexGraph++

    document.getElementById(`f_graph_${currentIndexGraph}`).className += ' lg:block'
    document.getElementById(`m_graph_${currentIndexGraph}`).className += ' sm:hidden md:block lg:hidden xl:hidden'
    document.getElementById(`s_graph_${currentIndexGraph}`).className =
      document.getElementById(`s_graph_${currentIndexGraph}`).className.replace('hidden', 'md:hidden')
    document.getElementById(`graph_title_${currentIndexGraph}`).style.display = 'block'
    document.getElementById(`dot_${currentIndexGraph - 1}`).className += ' active'
  }
}

export default (props) => {
  const barData = require('../data/skills/programming').default
  const withResponsiveness = require('../helpers/withResponsiveness').default
  const ResponsiveBarChart = withResponsiveness(Bar)

  if (props.codeLanguage !== previousCodeLanguage) {
    currentIndexGraph = 1
    previousIndexGraph = null
    countMaxGraph = 5
    widthSlideShowF = 896
    previousCodeLanguage = props.codeLanguage
  }

  return (
    <div className='max-w-4xl mx-auto mt-20'>
      <h2 id='skills' className='text-4xl font-bold text-center text-gray-800'>{Translate(props.codeLanguage, 'skills')}</h2>
      <h2 id='graph_title_1' className='text-xl font-light text-center text-gray-700 mt-20'>{Translate(props.codeLanguage, 'programmingLang')}</h2>
      <div id='slideshow' className='slideshow-container'>
        {/* Bar #1 - Programming Languages */}
        <div
          id='m_graph_1'
          className='max-w-4xl mx-auto hidden sm:hidden md:block lg:hidden xl:hidden'
          data-sal='fade'
          data-sal-delay='300'
          data-sal-easing='easeOutCubic'>
          <ResponsiveBarChart
            data={barData.programmingLanguages(props.codeLanguage)}
            isHorizontal={true}
            height={400}
            width={760}
            betweenBarsPadding={0.3}
            hasPercentage={true}
            colorSchema={Colors.blueGrey}
            margin={{ left: 100, right: 40, top: 40, bottom: 40 }} />
        </div>
        <div
          id='s_graph_1'
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
          id='f_graph_1'
          className='max-w-4xl mx-auto mySlides hidden lg:block'
          data-sal='fade'
          data-sal-delay='300'
          data-sal-easing='easeOutCubic'>
          <ResponsiveBarChart
            data={barData.programmingLanguages(props.codeLanguage)}
            isHorizontal={false}
            height={400}
            width={widthSlideShowF}
            betweenBarsPadding={0.3}
            hasPercentage={true}
            colorSchema={Colors.blueGrey}
            margin={{ left: 100, right: 40, top: 40, bottom: 40 }} />
        </div>
        {/* Bar #2 - Web Frameworks */}
        <h2 id='graph_title_2' className='text-xl font-light text-center text-gray-700 mt-20 hidden'>{Translate(props.codeLanguage, 'webFrameworks')}</h2>
        <div id='m_graph_2' className='max-w-4xl mx-auto hidden'>
          <ResponsiveBarChart
            data={barData.webFrameworks(props.codeLanguage)}
            isHorizontal={true}
            height={400}
            width={760}
            betweenBarsPadding={0.3}
            hasPercentage={true}
            colorSchema={Colors.blueGrey}
            margin={{ left: 100, right: 40, top: 40, bottom: 40 }} />
        </div>
        <div id='s_graph_2' className='max-w-4xl mx-auto hidden'>
          <ResponsiveBarChart
            data={barData.webFrameworks(props.codeLanguage)}
            isHorizontal={true}
            height={400}
            betweenBarsPadding={0.3}
            hasPercentage={true}
            colorSchema={Colors.blueGrey}
            margin={{ left: 100, right: 40, top: 40, bottom: 40 }} />
        </div>
        <div id='f_graph_2' className='max-w-4xl mx-auto mySlides hidden'>
          <ResponsiveBarChart
            data={barData.webFrameworks(props.codeLanguage)}
            isHorizontal={false}
            height={400}
            width={widthSlideShowF}
            betweenBarsPadding={0.3}
            hasPercentage={true}
            colorSchema={Colors.blueGrey}
            margin={{ left: 100, right: 40, top: 40, bottom: 40 }} />
        </div>
        {/* Bar #3 - Databases */}
        <h2 id='graph_title_3' className='text-xl font-light text-center text-gray-700 mt-20 hidden'>{Translate(props.codeLanguage, 'databases')}</h2>
        <div id='m_graph_3' className='max-w-4xl mx-auto hidden'>
          <ResponsiveBarChart
            data={barData.databases(props.codeLanguage)}
            isHorizontal={true}
            height={400}
            width={760}
            betweenBarsPadding={0.3}
            hasPercentage={true}
            colorSchema={Colors.blueGrey}
            margin={{ left: 100, right: 40, top: 40, bottom: 40 }} />
        </div>
        <div id='s_graph_3' className='max-w-4xl mx-auto hidden'>
          <ResponsiveBarChart
            data={barData.databases(props.codeLanguage)}
            isHorizontal={true}
            height={400}
            betweenBarsPadding={0.3}
            hasPercentage={true}
            colorSchema={Colors.blueGrey}
            margin={{ left: 100, right: 40, top: 40, bottom: 40 }} />
        </div>
        <div id='f_graph_3' className='max-w-4xl mx-auto mySlides hidden'>
          <ResponsiveBarChart
            data={barData.databases(props.codeLanguage)}
            isHorizontal={false}
            height={400}
            width={widthSlideShowF}
            betweenBarsPadding={0.3}
            hasPercentage={true}
            colorSchema={Colors.blueGrey}
            margin={{ left: 100, right: 40, top: 40, bottom: 40 }} />
        </div>
        {/* Bar #4 - Platforms */}
        <h2 id='graph_title_4' className='text-xl font-light text-center text-gray-700 mt-20 hidden'>{Translate(props.codeLanguage, 'platforms')}</h2>
        <div id='m_graph_4' className='max-w-4xl mx-auto hidden'>
          <ResponsiveBarChart
            data={barData.platforms(props.codeLanguage)}
            isHorizontal={true}
            height={400}
            width={760}
            betweenBarsPadding={0.3}
            hasPercentage={true}
            colorSchema={Colors.blueGrey}
            margin={{ left: 100, right: 40, top: 40, bottom: 40 }} />
        </div>
        <div id='s_graph_4' className='max-w-4xl mx-auto hidden'>
          <ResponsiveBarChart
            data={barData.platforms(props.codeLanguage)}
            isHorizontal={true}
            height={400}
            betweenBarsPadding={0.3}
            hasPercentage={true}
            colorSchema={Colors.blueGrey}
            margin={{ left: 100, right: 40, top: 40, bottom: 40 }} />
        </div>
        <div id='f_graph_4' className='max-w-4xl mx-auto mySlides hidden'>
          <ResponsiveBarChart
            data={barData.platforms(props.codeLanguage)}
            isHorizontal={false}
            height={400}
            width={widthSlideShowF}
            betweenBarsPadding={0.3}
            hasPercentage={true}
            colorSchema={Colors.blueGrey}
            margin={{ left: 100, right: 40, top: 40, bottom: 40 }} />
        </div>
        {/* Bar #5 - Developer Tools */}
        <h2 id='graph_title_5' className='text-xl font-light text-center text-gray-700 mt-20 hidden'>{Translate(props.codeLanguage, 'devTools')}</h2>
        <div id='m_graph_5' className='max-w-4xl mx-auto hidden'>
          <ResponsiveBarChart
            data={barData.devTools(props.codeLanguage)}
            isHorizontal={true}
            height={400}
            width={760}
            betweenBarsPadding={0.3}
            hasPercentage={true}
            colorSchema={Colors.blueGrey}
            margin={{ left: 100, right: 40, top: 40, bottom: 40 }} />
        </div>
        <div id='s_graph_5' className='max-w-4xl mx-auto hidden'>
          <ResponsiveBarChart
            data={barData.devTools(props.codeLanguage)}
            isHorizontal={true}
            height={400}
            betweenBarsPadding={0.3}
            hasPercentage={true}
            colorSchema={Colors.blueGrey}
            margin={{ left: 100, right: 40, top: 40, bottom: 40 }} />
        </div>
        <div id='f_graph_5' className='max-w-4xl mx-auto mySlides hidden'>
          <ResponsiveBarChart
            data={barData.devTools(props.codeLanguage)}
            isHorizontal={false}
            height={400}
            width={widthSlideShowF}
            betweenBarsPadding={0.3}
            hasPercentage={true}
            colorSchema={Colors.blueGrey}
            margin={{ left: 100, right: 40, top: 40, bottom: 40 }} />
        </div>
        <button
          id='arrow_left'
          className='prev hidden lg:block'
          onClick={prevGraph}
          data-sal='fade'
          data-sal-delay='300'
          data-sal-easing='easeOutCubic'>
          ❮
        </button>
        <button
          id='arrow_rigth'
          className='next hidden lg:block'
          onClick={nextGraph}
          data-sal='fade'
          data-sal-delay='300'
          data-sal-easing='easeOutCubic'>
          ❯
        </button>
      </div>
      <div style={{textAlign: 'center'}}>
        <button
          id='dot_0'
          className='dot active'
          onClick={currentSlide}
          data-message={0} />
        <button
          id='dot_1'
          className='dot'
          onClick={currentSlide}
          data-message={1} />
        <button
          id='dot_2'
          className='dot'
          onClick={currentSlide}
          data-message={2} />
        <button
          id='dot_3'
          className='dot'
          onClick={currentSlide}
          data-message={3} />
        <button
          id='dot_4'
          className='dot'
          onClick={currentSlide}
          data-message={4} />
      </div>
    </div>
  )
}
