import React from 'react'
import Header from '../components/header'
import Repos from '../components/repos'
import Education from '../components/education'
import Medium from '../components/medium'
import EndNav from '../components/education-nav'
import Chart from '../components/charts/charts'
import About from '../components/about/about'
import Skills from '../components/skills'

const codeLanguage = require('../data/languages');

export default () => <div>
                       <Header codeLanguage={codeLanguage.langs[1]}/>
                       <About codeLanguage={codeLanguage.langs[1]}/>
                       <Skills codeLanguage={codeLanguage.langs[1]}/>
                       <Education codeLanguage={codeLanguage.langs[1]}/>
                     </div>
