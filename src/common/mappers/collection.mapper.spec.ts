import { mapToCollection } from "./collection.mapper";

describe("mapper mapToCollection", () => {
  it("Mapping collection", () => {
    // Arrange
    const A: number[] = [1, 2, 3];
    const B = (A: any): any => ({
      id: A
    });

    // Act
    const result: number[] = mapToCollection(A, B);

    // Assert
    const expectedResult: any[] = [{id:1},{id:2},{id:3}];
    expect(result).toEqual(expectedResult);
  });
  it("Returning empty array", () => {
    // Arrange
    const A = undefined;
    const B = (A: any): any => ({
      id: A
    });

    // Act
    const result: number[] = mapToCollection(A, B);

    // Assert
    const expectedResult = [];
    expect(result).toEqual(expectedResult);
  });  
});
