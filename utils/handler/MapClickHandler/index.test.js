import { render } from "@testing-library/react";
import MapClickHandler from ".";

describe("MapClickHandler", () => {
  test("renders without crashing", () => {
    const setMapData = jest.fn();
    render(<MapClickHandler setMapData={setMapData} />);
  });

  test("handles map click event and sets map data", async () => {
    const setMapData = jest.fn();
    const event = {
      latlng: {
        lat: 51.5074,
        lng: -0.1278,
      },
    };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        address: {
          country: "United Kingdom",
        },
      }),
    });

    render(<MapClickHandler setMapData={setMapData} />);

    await MapClickHandler.defaultProps.useMapEvents.click(event);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${event.latlng.lat}&lon=${event.latlng.lng}&zoom=5&accept-language=en`
    );
    expect(setMapData).toHaveBeenCalledTimes(1);
    expect(setMapData).toHaveBeenCalledWith((prevMapData) => ({
      ...prevMapData,
      selectedCountry: "United Kingdom",
      selectedLat: event.latlng.lat,
      selectedLon: event.latlng.lng,
    }));
  });
});
