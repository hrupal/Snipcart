/// <reference types="Cypress" />
import { productTestData } from "../../fixtures/productTestData"
describe("Product selection test - ", () => {
    it(`Given I navigate to Snipcart site`, () => {
        cy.visit({
            url: '',
            method: 'GET'
        });
    });

    it(`When I select a product`, () => {
        const productName = `[href='/${productTestData.selectProductTestData.uiTestData.productName}/']`;
        cy.get(productName).click();
    });

    it(`Then I assert available product colors`, () => {
        cy.get("#Color option").each((ele, index) => {
            cy.log(productTestData.selectProductTestData.uiTestData.colors[index]);
            expect(ele.text()).to.be.equal(productTestData.selectProductTestData.uiTestData.colors[index]);
        });
    });

    it(`And I assert styles for buy button`, () => {
        cy.get("#buyButton").should("have.text", productTestData.selectProductTestData.uiTestData.buyButtonText)
            .should("have.css", "color", "rgb(245, 245, 245)")
            .should("have.class", "snipcart-add-item")
            .should("be.visible");
    });

    it(`Then I assert url contains right product name`, () => {
        cy.url().should("include", productTestData.selectProductTestData.uiTestData.productName);
    });
});
