import * as React from "react";
import { render, getByTestId } from "@testing-library/react";
import { TextField } from "./text-field";
import { FieldInputProps } from "react-final-form";

describe("Text Field specs", () => {
  it("should display a textfield with name and value when it feed a name and value", () => {
    // Arrange
    const props = {
      input: ({
        name: "TextName",
        onChange: jest.fn(),
        value: "TestValue",
      } as unknown) as FieldInputProps<any, any>,
      meta: '',
      "data-testid": "myTextField",
    };

    // Act
    const { getByTestId } = render(<TextField {...props} />);
    
    const Element = getByTestId("myTextField") as HTMLInputElement;

    // Assert
    expect(Element.name).toEqual("TextName");
    expect(Element.value).toEqual("TestValue");
  });
  it("Getting an error in the component", () => {
    // Arrange
    const props = {
      input: ({
        name: "TextName",
        onChange: jest.fn(),
        value: "TestValue",
      } as unknown) as FieldInputProps<any, any>,
      meta: {
        error: 'Error text',
        touched: true,
      },
      "data-testid": "myTextField",
    };

    // Act
    const { getByText } = render(<TextField {...props} />);
    
    const elementError = getByText('Error text') as InnerHTML;

    // Assert
    expect(elementError.innerHTML).toEqual("Error text");
  });
});
