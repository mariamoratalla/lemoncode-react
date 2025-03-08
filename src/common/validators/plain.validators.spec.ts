import {
  isDateAfterToday,
  isFieldNullOrUndefined,
  isPositiveNumber,
  isStringValueInformed,
  isValidEmail,
  isValidIban,
} from "./plain.validators";

describe("plain.validators.ts", () => {
  describe("isValidIban", () => {
    it("should return true when iban is valid", () => {
      // Arrange
      const iban = "ES91 2100 0418 4502 0005 1332";
      // Act
      const result = isValidIban(iban);
      // Assert
      expect(result).toBeTruthy();
    });

    it("should return true when iban is formatted with dashes is valid", () => {
      // Arrange
      const iban = "ES91-2100-0418-4502-0005-1332";
      // Act
      const result = isValidIban(iban);
      // Assert
      expect(result).toBeTruthy();
    });

    it("should return true when iban is formatted with no spaces is valid", () => {
      // Arrange
      const iban = "ES9121000418450200051332";
      // Act
      const result = isValidIban(iban);
      // Assert
      expect(result).toBeTruthy();
    });

    it("should return false when iban is not valid", () => {
      // Arrange
      const iban = "ES91 2100 0418 4502 0005 1333";
      // Act
      const result = isValidIban(iban);
      // Assert
      expect(result).toBeFalsy();
    });

    it("should return false if iban is empty", () => {
      // Arrange
      const iban = "";
      // Act
      const result = isValidIban(iban);
      // Assert
      expect(result).toBeFalsy();
    });
  });

  describe("isPositiveNumber", () => {
    it("should return true when amount is positive", () => {
      // Arrange
      const amount = 1;
      // Act
      const result = isPositiveNumber(amount);
      // Assert
      expect(result).toBeTruthy();
    });

    it("should return false when amount is negative", () => {
      // Arrange
      const amount = -1;
      // Act
      const result = isPositiveNumber(amount);
      // Assert
      expect(result).toBeFalsy();
    });

    it("should return false when amount is 0", () => {
      // Arrange
      const amount = 0;
      // Act
      const result = isPositiveNumber(amount);
      // Assert
      expect(result).toBeFalsy();
    });
  });

  describe("isDateAfterToday", () => {
    it("should return true when date is after today", () => {
      // Arrange
      const date = new Date();
      date.setDate(date.getDate() + 1);
      // Act
      const result = isDateAfterToday(date);
      // Assert
      expect(result).toBeTruthy();
    });

    it("should return false when date is before today", () => {
      // Arrange
      const date = new Date();
      date.setDate(date.getDate() - 1);
      // Act
      const result = isDateAfterToday(date);
      // Assert
      expect(result).toBeFalsy();
    });

    it("should return false when date is today", () => {
      // Arrange
      const date = new Date();
      // Act
      const result = isDateAfterToday(date);
      // Assert
      expect(result).toBeFalsy();
    });
  });

  describe("isValidEmail", () => {
    it("should return true when email is valid", () => {
      // Arrange
      const email = "maria@gmail.com";
      // Act
      const result = isValidEmail(email);
      // Assert
      expect(result).toBeTruthy();
    });

    it("should return false when email is invalid", () => {
      // Arrange
      const email = "maria@gmail";
      // Act
      const result = isValidEmail(email);
      // Assert
      expect(result).toBeFalsy();
    });
  });

  describe("isStringValueInformed", () => {
    it("should return true when all string fields are informed", () => {
      // Arrange
      const field = "hola";
      // Act
      const result = isStringValueInformed(field);
      // Assert
      expect(result).toBeTruthy();
    });

    it("should return false when the field is empty", () => {
      // Arrange
      const field = "";
      // Act
      const result = isStringValueInformed(field);
      // Assert
      expect(result).toBeFalsy();
    });
  });

  describe("isFieldNullOrUndefined", () => {
    it("should return true when field is informed", () => {
      // Arrange
      const field = "test";
      // Act
      const result = isFieldNullOrUndefined(field);
      // Assert
      expect(result).toBeTruthy();
    });

    it("should return false when field is null", () => {
      // Arrange
      const field = null;
      // Act
      const result = isFieldNullOrUndefined(field);
      // Assert
      expect(result).toBeFalsy();
    });

    it("should return false when field is undefined", () => {
      // Arrange
      const field = undefined;
      // Act
      const result = isFieldNullOrUndefined(field);
      // Assert
      expect(result).toBeFalsy();
    });
  });
});
