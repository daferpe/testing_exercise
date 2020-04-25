import { useHotelCollection } from "./hotel-collection.hook";
import * as api from "./hotel-collection.api";
import { renderHook, act } from "@testing-library/react-hooks";
import { HotelEntityApi } from "./hotel-collection.api";
import * as viewModel from "./hotel-collection.vm";

describe("hook useHotelCollection", () => {
  it("Empy call", () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useHotelCollection());

    // Assert
    expect(result.current.hotelCollection).toEqual([]);
  });
  it("Call with parameters", async () => {
    // Arrange
    const hotels: HotelEntityApi[] = [
      {
        id: "id_field",
        type: "type_field",
        name: "name_field",
        address1: "address1_field",
      } as HotelEntityApi,
    ];

    jest.spyOn(api, "getHotelCollection").mockResolvedValue(hotels);

    // Act
    const { result, waitForNextUpdate } = renderHook(() =>
      useHotelCollection()
    );
    act(() => {
      result.current.loadHotelCollection();
    });
    await waitForNextUpdate();

    // Assert
    const expectedResult: viewModel.HotelEntityVm[] = [
      {
        id: "id_field",
        name: "name_field",
        description: undefined,
        rating: undefined,
        address: "address1_field",
        picture: "http://localhost:3000undefined"
      } as viewModel.HotelEntityVm,
    ];
    expect(result.current.hotelCollection).toEqual(expectedResult);
  });
});
