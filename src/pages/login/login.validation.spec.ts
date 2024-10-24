import { validateForm } from "./login.validation";
import { Credentials } from "./login.vm";

describe("pages/login/login.validation.ts", () => {
  it("should return validation succeeded when both fields are informed", () => {
    // Arrange
    const credentials: Credentials = {
      user: "myUser",
      password: "mypassword",
    };

    // Act
    const result = validateForm(credentials);

    // Assert
    expect(result.succeeded).toBeTruthy();
    expect(result.errors.user).toEqual("");
    expect(result.errors.password).toEqual("");
  });
});

describe("pages/login/login.validation.ts", () => {
  it("should return validation failed when both fields are empty", () => {
    // Arrange
    const credentials: Credentials = {
      user: "",
      password: "mypassword",
    };

    // Act
    const result = validateForm(credentials);

    // Assert
    expect(result.succeeded).toBeFalsy();
    expect(result.errors.user).toEqual("Debe informar el campo usuario");
    expect(result.errors.password).toEqual("");
  });
});
