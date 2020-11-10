export const specificDateForeignExchangeRatesTestData = {
  withSymbolsTestData: {
    specificDate: '2010-01-12',
    base: "EUR",
    invalidBase: 'GBP',
    rates: {
      USD: 1.4481,
      GBP: 0.8972
    }
  },
  withBaseTestData: {
    specificDate: '2010-01-12',
    base: "USD",
    invalidBase: "GBP",
    rates: {
      GBP: 0.6195704717,
      HKD: 7.7550583523
    }
  },
  withSymbolsAndBaseTestData: {
    specificDate: '2010-01-12',
    base: "USD",
    invalidBase: 'GBP',
    rates: {
      GBP: 0.6195704717
    }
  }
}