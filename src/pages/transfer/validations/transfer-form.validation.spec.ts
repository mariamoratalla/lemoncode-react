import { TransferVm } from "../transfer.vm";
import * as transferFieldValidation from "./transfer-fields.validation";
import { vi } from "vitest";
import { validateForm } from "./transfer-form.validation";
describe("transfer-form.validation specs", () => {
  describe("validateForm", () => {
    it("should return true if all fields are successful", () => {
      // Arrange
      const transfer: TransferVm = {
        accountId: "1",
        iban: "ES91 2100 0418 4502 0005 1332",
        name: "John Doe",
        amount: 1,
        concept: "Test",
        notes: "",
        dateTransfer: undefined,
        realDateTransfer: undefined,
        email: "",
      };

      vi.spyOn(transferFieldValidation, "validateIbanField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateNameField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateAmountField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateConceptField").mockReturnValue(
        {
          succeeded: true,
        }
      );
      vi.spyOn(transferFieldValidation, "validateNotesField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(
        transferFieldValidation,
        "validateRealDateTransferField"
      ).mockReturnValue({ succeeded: true });
      vi.spyOn(transferFieldValidation, "validateEmailField").mockReturnValue({
        succeeded: true,
      });

      // Act
      const result = validateForm(transfer);

      // Assert
      expect(result.succeded).toBeTruthy();
      expect(result.errors).toEqual({
        accountId: "",
        iban: "",
        name: "",
        amount: "",
        concept: "",
        notes: "",
        dateTransfer: "",
        realDateTransfer: "",
        email: "",
      });
    });

    it("should return false if name is not valid", () => {
      // Arrange
      const transfer: TransferVm = {
        accountId: "1",
        iban: "ES91 2100 0418 4502 0005 1332",
        name: "John Doe",
        amount: 1,
        concept: "Test",
        notes: "",
        dateTransfer: undefined,
        realDateTransfer: undefined,
        email: "",
      };

      vi.spyOn(transferFieldValidation, "validateIbanField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateNameField").mockReturnValue({
        succeeded: false,
        errorMessage: "Error",
      });
      vi.spyOn(transferFieldValidation, "validateAmountField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(transferFieldValidation, "validateConceptField").mockReturnValue(
        {
          succeeded: true,
        }
      );
      vi.spyOn(transferFieldValidation, "validateNotesField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(
        transferFieldValidation,
        "validateRealDateTransferField"
      ).mockReturnValue({ succeeded: true });
      vi.spyOn(transferFieldValidation, "validateEmailField").mockReturnValue({
        succeeded: true,
      });

      // Act
      const result = validateForm(transfer);

      // Assert
      expect(result.succeded).toBeFalsy();
      expect(result.errors).toEqual({
        accountId: "",
        iban: "",
        name: "Error",
        amount: "",
        concept: "",
        notes: "",
        dateTransfer: "",
        realDateTransfer: "",
        email: "",
      });
    });
  });
});
