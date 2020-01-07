import React from 'react'
import Header from '../components/header'
import Education from '../components/education'
import About from '../components/about/about'
import Skills from '../components/skills'
import Portfolio from '../components/portfolio'

const codeLanguage = require('../data/languages')

export default () => <div>
                       <Header codeLanguage={codeLanguage.langs[0]} />
                       <About codeLanguage={codeLanguage.langs[0]} />
                       <Skills codeLanguage={codeLanguage.langs[0]} />
                       <Portfolio codeLanguage={codeLanguage.langs[0]} />
                       <Education codeLanguage={codeLanguage.langs[0]} />
                     </div>
