import { REQUIRED_FIELD_MESSAGE } from "../transfer/validations/validation.const";
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
    expect(result.succeded).toBeTruthy();
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
    expect(result.succeded).toBeFalsy();
    expect(result.errors.user).toEqual(REQUIRED_FIELD_MESSAGE);
    expect(result.errors.password).toEqual("");
  });
});
