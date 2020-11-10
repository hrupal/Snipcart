export function assertLatestRatesResponses(apiResponse,data) {
    expect(apiResponse.status === 200).to.be.true;
    expect(apiResponse.body.base === data.base).to.be.true;
    //negative test 
    expect(apiResponse.body.base === data.invalidBase).to.be.false;
}
export function assertSpecificDateRatesResponses(apiResponse,data) {
    expect(apiResponse.status === 200).to.be.true;
    expect(apiResponse.body.base === data.base).to.be.true;                
    expect(apiResponse.body.date == data.specificDate).to.be.true;
    expect(apiResponse.body.rates.GBP === data.rates.GBP).to.be.true;       

    //negative test 
    expect(apiResponse.body.base === data.invalidBase).to.be.false;
}