import { renderHook } from "@testing-library/react-hooks";
import { useFetchData } from ".";

describe("useFetchData", () => {
  it("should fetch data successfully", async () => {
    const data = { name: "John Doe" };
    const url = "https://example.com/data";
    const options = { method: "GET" };
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(data),
      })
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchData(url, options)
    );
    expect(result.current).toBeNull();

    await waitForNextUpdate();

    expect(result.current).toEqual(data);
    expect(global.fetch).toHaveBeenCalledWith(url, options);
  });

  it("should handle errors correctly", async () => {
    const url = "https://example.com/data";
    const options = { method: "GET" };
    global.fetch = jest
      .fn()
      .mockImplementation(() => Promise.reject(new Error("Fetch error")));

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchData(url, options)
    );
    expect(result.current).toBeNull();

    await waitForNextUpdate();

    expect(result.current).toBeNull();
    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining("Fetch error")
    );
  });
});
