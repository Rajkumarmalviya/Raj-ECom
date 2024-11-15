import "./countryselect.css";
import React, { useState } from "react";

import ReactCountryFlagsCurrencySelect from 'react-country-flag-currency-picker';
const CountrySelect= () => {
  const [country, setCountry] = useState('');

  return (
    <ReactCountryFlagsCurrencySelect
      country={country}
      onChange={(country) => setCountry(country)}
    />
  );
};
export default function Country() {
    return(
      <CountrySelect className="disclosure-list"></CountrySelect>
    )
}