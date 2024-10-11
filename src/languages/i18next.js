import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

// ======= import file languages ======
import LaoLanguage from './la.json';
import EnglishLanguage from './en.json';

const resources = {
    LA: LaoLanguage,
    EN: EnglishLanguage
}

const selectedLanguage = localStorage.getItem('lang') || 'EN';

i18n.use(initReactI18next).init({
    resources,
    lng: selectedLanguage,
    interpolation:{
        escapeValue: false
    }
});
export default i18n;

                // function button to change languages
export const toggleLanguage = () =>{
    const cLang = i18n.language;

    const nLang = cLang === 'LA'? 'EN' : 'LA';

    i18n.changeLanguage(nLang);
    localStorage.setItem('lang', nLang);
}


