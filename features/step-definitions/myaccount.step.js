import { Given } from "@cucumber/cucumber";
import myaccount from "../pageobjects/myaccount.page";

Given(
  /^I shall verify the address information in my addresses section$/,
  async () => {
    await myaccount.navigateToAddress();
  }
);

Given(
  /^I am on the MyAccount Page$/,
  async() => {
    await expect(myaccount.myAccountSection).toBeExisting();
  }
);

Given(
  /^I add tshirt to cart$/,
  async() => {
    await myaccount.navigateToWomenSection();
    await expect(browser).toHaveTitleContaining('Women'); 
    await myaccount.navigateToProductPage();
    await $("#add_to_cart").click();
    
   await myaccount.navigateToCheckOutPage();
    
  
  }
);
