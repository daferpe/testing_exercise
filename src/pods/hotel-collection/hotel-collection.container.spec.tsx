import * as React from "react";
import { render, waitForElement } from "@testing-library/react";
import { HotelCollectionContainer } from "./hotel-collection.container";
import * as hook from "./hotel-collection.hook";
import { HotelEntityVm } from "./hotel-collection.vm";

describe("HotelCollectionContainer container specs", () => {
  it("Testing container", async () => {
    // Arrange
    const hotelCollection = [
      {
        id: "id_field",
        picture: "picture_field",
        name: "name_field",
        description: "description_field",
        rating: 1,
        address: "address_field",
      } as HotelEntityVm
    ];

    const mocks = {
      hotelCollection,
      loadHotelCollection: jest.fn(),
    };

    jest.spyOn(hook, "useHotelCollection").mockReturnValue(mocks);

    // Act
    const { getByText } = render(<HotelCollectionContainer />);
    const element = await waitForElement(() => getByText("name_field"));

    // Assert
    expect(element.hasAttribute('id_field')).toBeTruthy;
  });
});
