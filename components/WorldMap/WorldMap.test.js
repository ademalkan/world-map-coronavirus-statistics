import { render, screen } from "@testing-library/react";
import WorldMap from ".";

it("renders map container", () => {
  render(<WorldMap />);
  const mapContainer = screen.getByRole("application");
  expect(mapContainer).toBeInTheDocument();
});

it("renders tile layer", () => {
  render(<WorldMap />);
  const tileLayer = screen.getByRole("img");
  expect(tileLayer).toBeInTheDocument();
});

it("clicking on map updates selected country", () => {
  render(<WorldMap />);
  const mapContainer = screen.getByRole("application");
  mapContainer.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  const countryPopup = screen.getByRole("dialog");
  expect(countryPopup).toBeInTheDocument();
});
