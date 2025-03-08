import {
  validateAccountIdField,
  validateAmountField,
  validateConceptField,
  validateEmailField,
  validateIbanField,
  validateRealDateTransferField,
} from "./transfer-fields.validation";
import { INVALID_IBAN_MESSAGE, REQUIRED_FIELD_MESSAGE, INVALID_AMOUNT_MESSAGE, INVALID_DATE_MESSAGE, INVALID_EMAIL_MESSAGE } from "./validation.const";

describe("transfer-fields spec", () => {
  describe("validateIbanField", () => {
    it("should return succeeded true when iban is valid", () => {
      // Arrange
      const iban = "ES91 2100 0418 4502 0005 1332";
      // Act
      const result = validateIbanField(iban);
      // Assert
      expect(result.succeeded).toBeTruthy();
    });

    it("should return succeeded false when iban is not valid", () => {
      // Arrange
      const iban = "ES93 2100 0418 4502 0005 1332";
      // Act
      const result = validateIbanField(iban);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_IBAN_MESSAGE);
    });

    it("should return succeeded false when iban is not informed", () => {
      // Arrange
      const iban = "";
      // Act
      const result = validateIbanField(iban);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });
  });

  describe("validateAccountIdField", () => {
    it("should return true when account is informed", () => {
      // Arrange
      const accountId = "1";
      // Act
      const result = validateAccountIdField(accountId);
      // Assert
      expect(result.succeeded).toBeTruthy();
    });

    it("should return false when account is not informed", () => {
      // Arrange
      const accountId = "";
      // Act
      const result = validateAccountIdField(accountId);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });
  });

  describe("validateNameField", () => {
    it("should return true when name is informed", () => {
      // Arrange
      const accountId = "John Doe";
      // Act
      const result = validateAccountIdField(accountId);
      // Assert
      expect(result.succeeded).toBeTruthy();
    });

    it("should return false when name is not informed", () => {
      // Arrange
      const accountId = "";
      // Act
      const result = validateAccountIdField(accountId);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });
  });

  describe("validateAmountField", () => {
    it("should return true when amount is positive", () => {
      // Arrange
      const amount = 1;
      // Act
      const result = validateAmountField(amount);
      // Assert
      expect(result.succeeded).toBeTruthy();
    });

    it("should return false when amount is negative", () => {
      // Arrange
      const amount = -1;
      // Act
      const result = validateAmountField(amount);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_AMOUNT_MESSAGE);
    });
  });

  describe("validateConceptField", () => {
    it("should return true when field is informed", () => {
      // Arrange
      const concept = "test";
      // Act
      const result = validateConceptField(concept);
      // Assert
      expect(result.succeeded).toBeTruthy();
    });

    it("should return false when field is not informed", () => {
      // Arrange
      const concept = "";
      // Act
      const result = validateConceptField(concept);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });
  });

  describe("validateRealDateTransferField", () => {
    it("should return true if date is undefined", () => {
      // Arrange
      const value = undefined;
      // Act
      const result = validateRealDateTransferField(value);
      // Assert
      expect(result.succeeded).toBeTruthy();
    });

    it("should return true if date is after today", () => {
      // Arrange
      const date = new Date();
      date.setDate(date.getDate() + 1);
      // Act
      const result = validateRealDateTransferField(date);
      // Assert
      expect(result.succeeded).toBeTruthy();
    });

    it("should return false if date is before today", () => {
      // Arrange
      const date = new Date();
      date.setDate(date.getDate() - 1);
      // Act
      const result = validateRealDateTransferField(date);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_DATE_MESSAGE);
    });
  });

  describe("validateEmailField", () => {
    it("should return true if email is not informed", () => {
      // Arrange
      const email = "";
      // Act
      const result = validateEmailField(email);
      // Assert
      expect(result.succeeded).toBeTruthy();
    });

    it("should return true if email is well informed", () => {
      // Arrange
      const email = "maria@gmail.com";
      // Act
      const result = validateEmailField(email);
      // Assert
      expect(result.succeeded).toBeTruthy();
    });

    it("should return false if email is not well informed", () => {
      // Arrange
      const email = "maria@gmail";
      // Act
      const result = validateEmailField(email);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(INVALID_EMAIL_MESSAGE);
    });
  });
});
