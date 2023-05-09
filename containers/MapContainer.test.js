import { render } from "@testing-library/react";
import dynamic from "next/dynamic";
import MapContainer from ".";

jest.mock("next/dynamic", () => jest.fn());

describe("MapContainer", () => {
  it("should render WorldMap component", () => {
    dynamic.mockReturnValueOnce(() => <div>Mocked WorldMap</div>);

    const { getByText } = render(<MapContainer />);
    expect(getByText("Mocked WorldMap")).toBeInTheDocument();
  });

  it("should set ssr option to false for dynamic import", () => {
    expect(dynamic).toHaveBeenCalledWith(expect.any(Function), { ssr: false });
  });
});
