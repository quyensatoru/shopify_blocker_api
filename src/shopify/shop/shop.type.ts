export type ShopifyShopResource = {
    shop: {
        id: string;
        name: string;
        url: string;
        email: string;
        currencyCode: string;
        primaryDomain: {
            host: string;
        };
        plan: {
            partnerDevelopment: boolean;
            shopifyPlus: boolean;
            displayName: string;
        };
        currencyFormats: {
            moneyFormat: string;
            moneyWithCurrencyFormat: string;
        };
        billingAddress: {
            country: string;
            countryCodeV2: string;
        };
    };
};
