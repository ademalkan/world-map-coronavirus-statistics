import { renderHook } from "@testing-library/react-hooks";
import useFetchCountryData from ".";

describe("useFetchCountryData", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            data: {
              confirmed: 10,
              deaths: 1,
              recovered: 9,
              lastChecked: "2023-05-09T15:31:20.024Z",
              lastReported: "2023-05-09T15:31:20.024Z",
            },
          }),
      })
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should fetch country data", async () => {
    const selectedCountry = "Turkey";
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchCountryData(selectedCountry)
    );

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Turkey",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "3b0c51715amshec0bfc8c3f91c1fp185f93jsn00b20816d950",
          "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        },
      }
    );

    await waitForNextUpdate();
    expect(result.current).toEqual({
      data: {
        confirmed: 10,
        deaths: 1,
        recovered: 9,
        lastChecked: "2023-05-09T15:31:20.024Z",
        lastReported: "2023-05-09T15:31:20.024Z",
      },
    });
  });

  it("should return null if there is no selected country", async () => {
    const selectedCountry = null;
    const { result } = renderHook(() => useFetchCountryData(selectedCountry));
    expect(result.current).toBeNull();
  });

  it("should handle fetch errors", async () => {
    const selectedCountry = "Turkey";
    global.fetch.mockImplementationOnce(() => Promise.reject("API is down"));
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchCountryData(selectedCountry)
    );

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Turkey",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "3b0c51715amshec0bfc8c3f91c1fp185f93jsn00b20816d950",
          "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        },
      }
    );

    await waitForNextUpdate();
    expect(result.current).toBeNull();
  });
});
