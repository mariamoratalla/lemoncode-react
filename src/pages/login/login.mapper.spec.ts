import * as apiModel from "./api/login.api-model";
import { mapCredentialsFromVmToApi } from "./login.mapper";
import * as viewModel from "./login.vm";

describe("login.mapper specs", () => {
  it("should return a redential with same properties", () => {
    // Arrange
    const vmCredentials: viewModel.Credentials = {
      user: "myUser",
      password: "mypassword",
    };

    const expectedApiCredentials: apiModel.Credentials = {
      user: "myUser",
      password: "mypassword",
    };

    // Act
    const result: apiModel.Credentials =
      mapCredentialsFromVmToApi(vmCredentials);

    // Assert
    expect(result).toEqual(expectedApiCredentials);
  });
});
