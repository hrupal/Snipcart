import { createAdd } from "typescript";

export const orderTestData = {
  orderTestData: {
    uiTestData: {
      productName: 'bow-ties',
      billingAddress: ['h singh', 'my company', 'my street1', 'my street2', 'my city', 'dy11 7er', 'Canada', 'Alberta'],
      shippingAddress: ['h singh', 'my company', 'my street1', 'my street2', 'my city', 'dy11 7er', 'Canada', 'Alberta'],
      expectedBillingAddress: ['h singh', 'dummy email', 'my company', 'my street1', 'my street2', 'my city, AB, CA', 'dy11 7er'],
      expectedShippingAddress: ['h singh', 'my company', 'my street1', 'my street2', 'my city, AB, CA', 'dy11 7er'],
      paymentDetails: {
        cardTypeText: 'Payment method : Credit card',
        card: 'Visa',
        name: 'h singh',
        cardNo: '4242424242424242',
        cvc: '345',
        expMonth: 'January',
        expYear: '2022'
      },
      shippingMethods: ['United States', 'Canada', 'Worldwide'],
      shippingPrices: ['$&nbsp;10.00', '$&nbsp;15.00', '$&nbsp;20.00']
    },
  }
}