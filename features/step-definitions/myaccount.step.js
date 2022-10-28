import { Given, When, Then } from "@cucumber/cucumber";
import myaccount from "../pageobjects/myaccount.page";

Given(/^I shall verify the address information in my addresses section$/, async () => {
    await myaccount.navigateToAddress();
  }
);

Then(/^I am on the MyAccount Page$/, async () => {
  await expect(myaccount.myAccountSection).toBeExisting();
});

Then(/^I add tshirt to cart$/, async () => {
  await myaccount.navigateToWomenSection();
  await expect(browser).toHaveTitleContaining("Women");
  await myaccount.navigateToProductPage();
  await $("#add_to_cart").click();
  await myaccount.navigateToCheckOutPage();
});
