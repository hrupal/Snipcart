/// <reference types="Cypress" />
import { latestForeignExchangeRatesTestData } from "../../fixtures/latestForeignExchangeRatesTestData"
import { assertLatestRatesResponses} from "../../framework/apiHelpers/assertHelpers"

describe("Assert Latest Foreign Exchange rates with symbols - ", () => {
    let apiResponse;
    it(`I send request to Latest Foreign Exchange rates api  with symbols`, () => {
        const apiUrl = `${Cypress.config(
            "apiBaseUrl"
        )}/latest?symbols=${encodeURIComponent('USD,GBP'
        )}`
        cy.request("GET", apiUrl).then(res => { apiResponse = res; console.log(res) });
    });
    it(`I assert Latest Foreign Exchange rates api  with symbols responses`, () => {
        const data = latestForeignExchangeRatesTestData.withSymbolsTestData;
        assertLatestRatesResponses(apiResponse,data);
    });
});

describe("Assert latest Foreign Exchange rates with base - ", () => {
    let apiResponse;
    it(`I send request to specific Foreign Exchange rates api  with base`, () => {
        const apiUrl = `${Cypress.config(
            "apiBaseUrl"
        )}/latest?base=${encodeURIComponent('USD')}`
        cy.request("GET", apiUrl).then(res => { apiResponse = res; console.log(res) });
    });
    it(`I assert Latest Foreign Exchange rates api  with base responses`, () => {
        const data = latestForeignExchangeRatesTestData.withBaseTestData;
        assertLatestRatesResponses(apiResponse,data);
    });
});

describe("Assert latest Foreign Exchange rates with symbols and base - ", () => {
    let apiResponse;
    it(`I send request to latest Foreign Exchange rates api  with symbols base`, () => {
        const apiUrl = `${Cypress.config(
            "apiBaseUrl"
        )}/latest?base=${encodeURIComponent('USD')}&symbols=${encodeURIComponent('GBP')}`
        cy.request("GET", apiUrl).then(res => { apiResponse = res; console.log(res) });
    });
    it(`I assert Latest Foreign Exchange rates api  with symbols and base responses`, () => {
        const data = latestForeignExchangeRatesTestData.withSymbolsAndBaseTestData;
        assertLatestRatesResponses(apiResponse,data);
    });
});