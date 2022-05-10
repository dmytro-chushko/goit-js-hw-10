import renderCountryList from '../templates/country-list.hbs';
import renderCountryInfo from '../templates/country-info.hbs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const countryList = document.querySelector('.country-list');
export const countryInfo = document.querySelector('.country-info');

export function renderSearchResult(data) {
  if (data.length > 10) {
    Notify.info("Too many matches found. Please enter a more specific name.");
  } else if (data.length >= 2 && data.length <= 10) {
    countryList.innerHTML = renderCountryList(data);
  } else {
    countryInfo.innerHTML = renderCountryInfo(data);
  }
}