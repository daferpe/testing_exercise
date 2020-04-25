import * as React from "react";
import { render } from "@testing-library/react";
import { LoginComponent } from "./login.component";
import { LoginEntityVm } from "./login.vm";

describe("Login component specs", () => {
  it("should render a login component with name and password", () => {
    // Arrange
    const props = {
      onLogin: jest.fn(),
      initialLogin: {
        login: "admin",
        password: "1234",
      } as LoginEntityVm,
    };

    // Act
    const { getByTestId } = render(<LoginComponent {...props} />);
    const element = getByTestId('login-component');

    // Assert
    expect(element).toBeDefined();
  });
});
