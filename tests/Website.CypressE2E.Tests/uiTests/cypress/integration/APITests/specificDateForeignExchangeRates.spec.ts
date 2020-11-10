/// <reference types="Cypress" />
import { specificDateForeignExchangeRatesTestData } from "../../fixtures/specificDateForeignExchangeRatesTestData"
import { assertLatestRatesResponses,assertSpecificDateRatesResponses } from "../../framework/apiHelpers/assertHelpers"

describe("Assert Specific Dates Foreign Exchange rates with symbols -", () => {
    let apiResponse;
    it(`I send request to specific Foreign Exchange rates api  with symbols`, () => {
        const apiUrl = `${Cypress.config(
            "apiBaseUrl"
        )}/${specificDateForeignExchangeRatesTestData.withSymbolsTestData.specificDate}?symbols=${encodeURIComponent(
            'USD,GBP'
        )}`
        cy.request("GET", apiUrl).then(res => { apiResponse = res; console.log(res) });
    });
    it(`I assert specific dates Foreign Exchange rates api  with symbols responses -`, () => {
        const currentDate = new Date().toISOString().split('T')[0];        
        //positive test
        const data=specificDateForeignExchangeRatesTestData.withSymbolsTestData;
        assertSpecificDateRatesResponses(apiResponse,data);
        expect(apiResponse.body.rates.USD === data.rates.USD).to.be.true;        
    });

});

describe("Assert Specific Dates Foreign Exchange rates with base - ", () => {
    let apiResponse;
    it(`I send request to Specific Dates Foreign Exchange rates api  with base`, () => {
        const apiUrl = `${Cypress.config(
            "apiBaseUrl"
        )}/${specificDateForeignExchangeRatesTestData.withBaseTestData.specificDate}?base=${encodeURIComponent('USD')}`
        cy.request("GET", apiUrl).then(res => { apiResponse = res; console.log(res) });
    });
    it(`I assertSpecific Dates Foreign Exchange rates api  with base responses`, () => {        
        const data=specificDateForeignExchangeRatesTestData.withBaseTestData;
        //positive test
        assertSpecificDateRatesResponses(apiResponse,data);
        expect(apiResponse.body.rates.HKD === data.rates.HKD).to.be.true;        
    });

});

describe("Assert Specific Date Foreign Exchange rates with symbols and base - ", () => {
    let apiResponse;
    it(`I send request to Specific Dates Foreign Exchange rates api  with symbols base`, () => {
        const apiUrl = `${Cypress.config(
            "apiBaseUrl"
        )}/${specificDateForeignExchangeRatesTestData.withSymbolsAndBaseTestData.specificDate}?base=${encodeURIComponent('USD')}&symbols=${encodeURIComponent('GBP')}`
         cy.request("GET", apiUrl).then(res => { apiResponse = res; console.log(res) });
    });
    it(`I assert Specific Date Foreign Exchange rates api  with symbols and base responses`, () => {        
        //positive test
       const data= specificDateForeignExchangeRatesTestData.withSymbolsAndBaseTestData;
       assertSpecificDateRatesResponses(apiResponse,data);
    });
});

