import { mapFromApiToVm } from "./hotel-collection.mapper";
import * as apiModel from "./hotel-collection.api";
import * as viewModel from "./hotel-collection.vm";

describe("mapper mapFromApiToVm", () => {
  it("should pass spec", () => {
    // Arrange
    const hotel: apiModel.HotelEntityApi = {
      id: "1",
      type: "",
      thumbNailUrl: "",
      name: "NewHotel",
      shortDescription: "description",
      hotelRating: 3,
      address1: "text",
      created: null,
      modified: null,
      airportCode: "",
      amenityMask: null,
      city: "",
      confidenceRating: null,
      countryCode: "",
      deepLink: "",
      highRate: null,
      hotelId: null,
      hotelInDestination: null,
      location: {
        latitude: null,
        longitude: null,
      },
      locationDescription: "",
      lowRate: null,
      metadata: {
        path: "",
      },
      postalCode: null,
      propertyCategory: null,
      proximityDistance: null,
      proximityUnit: "",
      rateCurrencyCode: "",
      stateProvinceCode: "",
      tripAdvisorRating: null,
      tripAdvisorRatingUrl: "",
    };

    // Act
    const result: viewModel.HotelEntityVm = mapFromApiToVm(hotel);

    // Assert
    const expectedResult: viewModel.HotelEntityVm = {
      id: "1",
      picture: "http://localhost:3000",
      name: "NewHotel",
      description: "description",
      rating: 3,
      address: "text",
    };
    expect(result).toEqual(expectedResult);
  });
});
