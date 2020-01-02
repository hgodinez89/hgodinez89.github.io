import React from 'react'
import Header from '../components/header'
import Repos from '../components/repos'
import Education from '../components/education'
import Medium from '../components/medium'
import EndNav from '../components/education-nav'

const codeLanguage = require('../data/languages');

export default () => <div>
                       <Header codeLanguage={codeLanguage.langs[0]}/>
                       <EndNav codeLanguage={codeLanguage.langs[0]}/>
                       <Repos codeLanguage={codeLanguage.langs[0]}/>
                       <Education codeLanguage={codeLanguage.langs[0]}/>
                       <Medium codeLanguage={codeLanguage.langs[0]}/>
                     </div>
