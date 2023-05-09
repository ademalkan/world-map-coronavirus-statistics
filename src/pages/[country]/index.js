import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import useFetchCountryData from "../../../utils/fetchs/useFetchCountryData";
import styles from "./index.module.css";

function CountryStatistics() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState("");
  const countryData = useFetchCountryData(selectedCountry);
  useEffect(() => {
    setSelectedCountry(router.query.country);
  }, [router.query.country]);

  if (!countryData) {
    return (
      <div className={styles.loading_container}>
        <p className={styles.loading_text}>Loading...</p>
      </div>
    );
  }

  if (countryData.data.location == "Global") {
    return (
      <div className={styles.error_container}>
        <p className={styles.error_text}>{countryData.message}</p>
      </div>
    );
  }

  return (
    <div className={styles.country_stats_container}>
      <h1>{selectedCountry}</h1>
      <div className={styles.country_stats}>
        <div className={styles.stat_item}>
          <h2>Confirmed</h2>
          <p>
            {countryData?.data?.confirmed
              ? countryData?.data?.confirmed
              : "No Confirmed"}
          </p>
        </div>
        <div className={styles.stat_item}>
          <h2>Deaths</h2>
          <p>
            {countryData?.data?.deaths
              ? countryData?.data?.deaths
              : "No Deaths"}
          </p>
        </div>
        <div className={styles.stat_item}>
          <h2>Recovered</h2>
          <p>
            {countryData?.data?.recovered
              ? countryData?.data?.recovered
              : "No Recovered"}
          </p>
        </div>
        <div className={styles.stat_item}>
          <h2>Last Checked</h2>
          <p>
            {countryData?.data?.lastChecked
              ? new Date(countryData?.data?.lastChecked).toLocaleString()
              : "No Last Checked"}
          </p>
        </div>
        <div className={styles.stat_item}>
          <h2>Last Reported</h2>
          <p>
            {countryData?.data?.lastReported
              ? new Date(countryData?.data?.lastReported).toLocaleString()
              : "Last Reported"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryStatistics;
