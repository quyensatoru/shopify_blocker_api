export const shopQuery = `
    query getShop() {
        Shop { 
            id
            name
            url
            email
            currencyCode
            primaryDomain {
                host
            }
            plan {
                partnerDevelopment
                shopifyPlus
                displayName
            }
            currencyFormats {
                moneyFormat
                moneyWithCurrencyFormat
            }
            billingAddress {
                country
                countryCodeV2
            }
        }
    }
`