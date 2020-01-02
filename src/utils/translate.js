function translate(codeLanguage, key) {
    const languageJSON = require(`../data/locales/${codeLanguage}.json`)

    let languageMap = new Map(Object.entries(languageJSON))

    return languageMap.get(key)
}

export default translate;