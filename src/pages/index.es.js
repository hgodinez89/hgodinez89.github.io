import React from 'react'
import Header from '../components/header'
import About from '../components/about/about'
import Skills from '../components/skills'
import Portfolio from '../components/portfolio/portfolio'
import SEO from '../components/seo'
import Footer from '../components/footer/footer'

const codeLanguage = require('../data/languages')

export default () => <div>
                       <SEO/>
                       <Header codeLanguage={codeLanguage.langs[1]} />
                       <About codeLanguage={codeLanguage.langs[1]} />
                       <Skills codeLanguage={codeLanguage.langs[1]} />
                       <Portfolio codeLanguage={codeLanguage.langs[1]} />
                       <Footer codeLanguage={codeLanguage.langs[1]}/>
                     </div>
