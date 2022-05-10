import { fetchCountries } from './fetchCountries';
import { countryList, countryInfo, renderSearchResult } from './renderSearchResult';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function onInput({ target: { value } }) {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
  if (value) {
    fetchCountries(value.trim())
      .then(data => {
        renderSearchResult(data);
      })
      .catch(() => Notify.failure('Oops, there is no country with that name'));
  }
}
