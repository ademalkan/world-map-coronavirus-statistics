import { useState, useEffect } from "react";

const useFetchCountryData = (selectedCountry) => {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const formattedCountry =
        selectedCountry.charAt(0).toUpperCase() +
        selectedCountry.slice(1).toLowerCase();
      const url = `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${formattedCountry}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "3b0c51715amshec0bfc8c3f91c1fp185f93jsn00b20816d950",
          "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setCountryData(result);
      } catch (error) {
        console.error(error);
      }
    }

    if (selectedCountry) {
      fetchData();
    }
  }, [selectedCountry]);

  return countryData;
};

export default useFetchCountryData;
