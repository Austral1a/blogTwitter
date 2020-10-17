import React, {useState, useEffect} from 'react'
import {Switch} from 'antd'

const LanguageSwitcher = ({i18n}) => {
    const [currLang, setCurrLang] = useState(localStorage.getItem('lang') || 'en')
    useEffect(() => {
        // every time currLang changes set it to local storage
        localStorage.setItem('lang', currLang)
        // on page mount first time get current lang from local storage
        setCurrLang(localStorage.getItem('lang'))
        // update language in i18n to localize
        i18n.changeLanguage(currLang)
    }, [i18n, currLang])
    const handleChange = () => {
        currLang === 'en' ? setCurrLang('ru') : setCurrLang('en')
    }

    return (
        <Switch onChange={handleChange} checked={currLang === 'ru' ?? true} checkedChildren="Ru" unCheckedChildren="En" />
    )
}

export default LanguageSwitcher
