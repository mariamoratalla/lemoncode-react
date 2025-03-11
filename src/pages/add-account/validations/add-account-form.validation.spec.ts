import { vi } from "vitest";
import * as newAccountFieldsValidation from "./add-account-fields.validation";
import { validateForm } from "./add-account-form.validation";

describe("add-account-form specs", () => {
  describe("validateForm", () => {
    it("should return true if all fields are successful", () => {
      // Arrange
      const newAccount = {
        type: "Cuenta nómina",
        alias: "Nómina",
      };

      vi.spyOn(newAccountFieldsValidation, "validateTypeField").mockReturnValue(
        { succeeded: true }
      );

      vi.spyOn(
        newAccountFieldsValidation,
        "validateAliasField"
      ).mockReturnValue({ succeeded: true });

      // Act
      const result = validateForm(newAccount);

      // Assert
      expect(result.succeded).toBeTruthy();
      expect(result.errors).toEqual({
        type: "",
        alias: "",
      });
    });

    it("should return false if type is empty", () => {
      // Arrange
      const newAccount = {
        type: "",
        alias: "Nómina",
      };

      vi.spyOn(newAccountFieldsValidation, "validateTypeField").mockReturnValue(
        { succeeded: false, errorMessage: "error" }
      );

      vi.spyOn(
        newAccountFieldsValidation,
        "validateAliasField"
      ).mockReturnValue({ succeeded: true });

      // Act
      const result = validateForm(newAccount);

      // Assert
      expect(result.succeded).toBeFalsy();
      expect(result.errors).toEqual({
        type: "error",
        alias: "",
      });
    });
  });
});
