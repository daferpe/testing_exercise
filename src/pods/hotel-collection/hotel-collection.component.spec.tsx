import * as React from "react";
import { render } from "@testing-library/react";
import { HotelCollectionComponent } from "./hotel-collection.component";
import { HotelEntityVm } from "./hotel-collection.vm";

describe("HotelCollectionComponent component specs", () => {
  it("Testing HotelCollectionComponent", () => {
    // Arrange
    const hotelCollection = [
      {
        id: "id_field",
        picture: "picture_field",
        name: "name_field",
        description: "description_field",
        rating: 1,
        address: "address_field",
      } as HotelEntityVm,
    ];

    // Act
    const { getByText } = render(
      <HotelCollectionComponent hotelCollection={hotelCollection} />
    );
    const element = getByText("name_field");

    // Assert
    expect(element.textContent).toEqual("name_field");
  });
});
