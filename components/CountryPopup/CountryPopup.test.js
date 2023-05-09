import { render } from "@testing-library/react";
import CountryPopup from "./CountryPopup";

describe("CountryPopup component", () => {
  test("renders loading message when countryData is null", () => {
    const { getByText } = render(
      <CountryPopup mapData={{ countryData: null }} />
    );
    expect(getByText("Loading...")).toBeInTheDocument();
  });

  test("renders 'Please select a country from the map.' when selectedCountry is null", () => {
    const { getByText } = render(
      <CountryPopup mapData={{ selectedCountry: null }} />
    );
    expect(
      getByText("Please select a country from the map.")
    ).toBeInTheDocument();
  });

  test("renders selected country name and data when countryData is not null and selectedCountry is not null", () => {
    const mockData = {
      data: {
        confirmed: 10,
        deaths: 2,
        recovered: 8,
        lastChecked: new Date().toString(),
        lastReported: new Date().toString(),
      },
    };
    const { getByText } = render(
      <CountryPopup
        mapData={{
          selectedCountry: "Test Country",
          selectedLat: 0,
          selectedLon: 0,
          countryData: mockData,
        }}
      />
    );
    expect(getByText("Test Country")).toBeInTheDocument();
    expect(
      getByText(`Confirmed: ${mockData.data.confirmed}`)
    ).toBeInTheDocument();
    expect(getByText(`Deaths: ${mockData.data.deaths}`)).toBeInTheDocument();
    expect(
      getByText(`Recovered: ${mockData.data.recovered}`)
    ).toBeInTheDocument();
    expect(
      getByText(
        `Last Checked: ${new Date(mockData.data.lastChecked).toLocaleString()}`
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        `Last Reported: ${new Date(
          mockData.data.lastReported
        ).toLocaleString()}`
      )
    ).toBeInTheDocument();
  });
});
