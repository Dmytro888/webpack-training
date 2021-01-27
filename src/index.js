import style from './css/style.css';
import countries from './data-base/coutries.json';
import countriesTemplates from './templates/countries.hbs';

const markup = countriesTemplates(countries);
document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
