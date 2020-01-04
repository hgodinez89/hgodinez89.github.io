import React from 'react'
import Header from '../components/header'
import Education from '../components/education'
import About from '../components/about/about'
import Skills from '../components/skills'

const codeLanguage = require('../data/languages');

export default () => <div>
                       <Header codeLanguage={codeLanguage.langs[1]}/>
                       <About codeLanguage={codeLanguage.langs[1]}/>
                       <Skills codeLanguage={codeLanguage.langs[1]}/>
                       <Education codeLanguage={codeLanguage.langs[1]}/>
                     </div>
