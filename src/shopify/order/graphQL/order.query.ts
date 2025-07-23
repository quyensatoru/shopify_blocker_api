export const orderQuery = `
    query getOrder($id: ID!) {
        Order(id: $id) {
            id
            email
            clientIp
            risk {
                assessments {
                    riskLevel
                    facts {
                        description
                        sentiment
                    }
                    provider {
                        id
                        description
                        handle
                        title
                    }
                }
            }
        }
    }
`;
