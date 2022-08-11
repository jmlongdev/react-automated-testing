import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {
  test("renders Hello World as a text", () => {
    //typically want to do three things. three A's
    //Arrange - set up the test data, test condition, and test environment
    render(<Greeting />);
    //Act - Run logic that should be tested (ex. execute function)
    // ... nothing
    //Assert - Compare the execution results with expected results
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was not clicked", () => {
    //Arrange
    render(<Greeting />);
    // Act
    const buttonNotCLickedElement = screen.getByText("good to see you", {
      exact: false,
    });
    //Assert
    expect(buttonNotCLickedElement).toBeInTheDocument();
  });
  test("renders 'Changed!' if the button was clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText("Changed!", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render good to see you if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
