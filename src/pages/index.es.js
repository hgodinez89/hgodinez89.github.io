import React from 'react'
import Header from '../components/header'
import Repos from '../components/repos'
import Education from '../components/education'
import Medium from '../components/medium'
// import EndNav from '../components/education-nav'

const codeLanguage = require('../data/languages');

export default () => <div>
                       <Header codeLanguage={'es'}/>
                       <Repos codeLanguage={codeLanguage.langs[1]}/>
                       <Education codeLanguage={codeLanguage.langs[1]}/>
                       <Medium codeLanguage={codeLanguage.langs[1]}/>
                     </div>
