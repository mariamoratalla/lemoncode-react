import { REQUIRED_FIELD_MESSAGE } from "@/pages/transfer/validations/validation.const";
import { validateTypeField } from "./add-account-fields.validation";

describe("add-account-field specs", () => {
  describe("validateTypeField", () => {
    it("should return succeded true and no error message if type field is informed", () => {
      // Arrange
      const type = "Cuenta nómina";
      // Act
      const result = validateTypeField(type);
      // Assert
      expect(result.succeeded).toBeTruthy();
      expect(result.errorMessage).toBeNull;
    });

    it("should return succeded false and a error mesage if type field is not informed", () => {
      // Arrange
      const type = "";
      // Act
      const result = validateTypeField(type);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });
  });

  describe("validateAliasField", () => {
    it("should return succeded true and no error message if type field is informed", () => {
      // Arrange
      const alias = "alias";
      // Act
      const result = validateTypeField(alias);
      // Assert
      expect(result.succeeded).toBeTruthy();
      expect(result.errorMessage).toBeNull;
    });

    it("should return succeded false and a error mesage if type field is not informed", () => {
      // Arrange
      const alias = "";
      // Act
      const result = validateTypeField(alias);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });
  });
});
