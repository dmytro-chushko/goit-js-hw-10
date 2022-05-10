import './css/styles.css';
import { onInput } from './js/onInput';
import { debounce } from 'debounce';

const DEBOUNCE_DELAY = 300;
const inputBox = document.querySelector('#search-box');
// const countryList = document.querySelector('.country-list');
// const countryInfo = document.querySelector('.country-info');

// countryList.innerHTML = templateFunction();

// function renderSearchResult(data) {
//   if (data.length > 10) {
//     Notify.info("Too many matches found. Please enter a more specific name.");
//   } else if (data.length >= 2 && data.length <= 10) {
//     countryList.innerHTML = renderCountryList(data);
//   } else {
//     console.log(data);
//     countryInfo.innerHTML = renderCountryInfo(data);
//   }
// }

// function onInput({ target: { value } }) {
//   countryList.innerHTML = '';
//   countryInfo.innerHTML = '';
//   if (value) {
//     fetchCountries(value.trim())
//       .then(data => {
//         console.log(data.length);
//         renderSearchResult(data);
//       })
//       .catch(() => Notify.failure('Oops, there is no country with that name'));
//   }
// }

inputBox.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY
));
