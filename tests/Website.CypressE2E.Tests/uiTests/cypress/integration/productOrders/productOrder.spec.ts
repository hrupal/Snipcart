/// <reference types="Cypress" />
import { orderTestData } from "../../fixtures/orderTestData"
describe("Buy any product and go to My cart - ", () => {
    let email = '';
    it(`Given I navigate to Snipcart site`, () => {
        cy.visit({
            url: '',
            method: 'GET'
        });
    });

    it(`When I select a product`, () => {
        const productName = `[href='/${orderTestData.orderTestData.uiTestData.productName}/']`;
        cy.get(productName).click();
    });

    it(`And I buy a product`, () => {
        cy.wait(3000);//dont remove wait required
        cy.scrollTo('bottom');
        cy.get("#buyButton").click();
    });

    it(`And I assert color and price displayed correctly`, () => {
        cy.get("#snipcart_custom_Color").should('have.value', 'Blue Red');
        cy.get("[data-bind='totalPrice']").should('have.html', '$&nbsp;7.00');
        cy.get("[class$='--add']").click();
        cy.get("[data-bind='totalPrice']").should('have.html', '$&nbsp;14.00');
        cy.get("[class='snip-product__remove snip-ico snip-ico--close']").should('be.visible')
    });

    it(`And I click on next step`, () => {
        cy.get("#snipcart-actions>a").click();
    });

    it(`And I check out`, () => {
        cy.get("#snipcart-guest-checkout").click();
    });

    it(`And I enter billling address`, () => {
        const address = orderTestData.orderTestData.uiTestData.billingAddress;
        cy.get("#snip-name").clear().type(address[0]);
        cy.get("#snip-company").clear().type(address[1]);
        cy.get("#snip-address1").clear().type(address[2]);
        cy.get("#snip-address2").clear().type(address[3]);
        cy.get("#snip-city").clear().type(address[4]);
        cy.get("#snip-postalCode").type(address[5])
        cy.get("#snip-country").select(address[6]);
        cy.get("#snipprovince").select(address[7]);
        email = `hrupal+${Math.floor(Math.random() * 99999 + 1)}@gmail.com`;//use random number to get unique email for each registration        
        cy.get("#snip-email").clear().type(email);
        cy.get("#snip-shippingSameAsBilling").check();
    });

    it(`And I click on next step`, () => {
        cy.get("#snipcart-next").click();
    });

    it(`And I assert shipping method names`, () => {
        const methods = orderTestData.orderTestData.uiTestData.shippingMethods;
        cy.get(".snip-product__name").each((ele, index) => {
            expect(ele.text()).to.be.equal(methods[index]);
        });
    });

    it(`And I assert shipping method prices`, () => {
        const prices = orderTestData.orderTestData.uiTestData.shippingPrices;
        cy.get(".snip-product--selectable>td:nth-child(2)").each((ele, index) => {
            expect(ele.html()).to.be.equal(prices[index]);
        });
    });

    it(`And I click on next step`, () => {
        cy.get("#snipcart-next").click();
    });

    it(`And I enter payment info`, () => {
        const paymentDetails = orderTestData.orderTestData.uiTestData.paymentDetails;
        cy.get("#snip-type").select(paymentDetails.card);
        cy.get("#snip-ownerName").clear().type(paymentDetails.name);
        cy.get("#snip-number").clear().type(paymentDetails.cardNo);
        cy.get("#snip-cvc").clear().type(paymentDetails.cvc);
        cy.get("#snip-expirationMonth").select(paymentDetails.expMonth);
        cy.get("#snip-expirationYear").select(paymentDetails.expYear);
    });

    it(`And I click on next step`, () => {
        cy.get("#snipcart-paymentmethod-pay").click();
    });

    it(`And I assert billing address`, () => {     
        const billingAddress = orderTestData.orderTestData.uiTestData.expectedBillingAddress;
        cy.get(".snip-static__content").eq(0).as('col1');
        cy.get("@col1").find("p").each((elemt, index) => {            
            if (elemt.text() !== '')//last p element is blank
            {
                if (index === 1 ) {
                    expect(elemt.text()).to.be.equal(email);// email address is random                   
                }
                else {
                    expect(elemt.text()).to.be.equal(billingAddress[index]);
                }
            }
        });
    });

    it(`And I assert shipping address`, () => {
        const shippingAddress = orderTestData.orderTestData.uiTestData.expectedShippingAddress;
        cy.get(".snip-static__content").eq(1).as('col2');
        cy.get("@col2").find("p").each((elem, index) => {
            if (elem.text() !== '')//last p element is blank
                expect(elem.text()).to.be.equal(shippingAddress[index]);
        });
    });

    it(`And I assert payment information`, () => {
        const paymentDetails = orderTestData.orderTestData.uiTestData.paymentDetails;
        cy.get(".snip-static__content").eq(2).as('col3');
        cy.get("@col3").find("p").eq(0).should('contain.text', paymentDetails.cardTypeText);
        cy.get("@col3").find("p").eq(1).should('contain.text', paymentDetails.name);
        cy.get("@col3").find("p").eq(2).should('contain.text', paymentDetails.card);
        cy.get("@col3").find("p").eq(3).should('contain.text', paymentDetails.cardNo.substring(0, 4));
    });

    it(`And I assert total including shipping`, () => {
        cy.get("#snipcart-total td").eq(1).as('total');
        cy.get("@total").should("have.html", "$&nbsp;25.20").should("be.visible");
    });

    it(`When I place order`, () => {
        cy.get("[class^='js-submit']").click();
    });

    it(`Then I assert order`, () => {
        cy.get("#snipcart-title").should('contain.text', 'SNIP-').should('be.visible');
        cy.get("[class*='success']").should('be.visible');
    });
});
