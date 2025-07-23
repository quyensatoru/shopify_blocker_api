interface Error {
    message: string;
    locations: Location[];
    path?: Array<string>;
    extensions?: {
        code: string;
        typeName: string;
    };
}

export interface GraphqlResult<T> {
    errors?: Array<Error>;
    data?: T;
    extensions: {
        cost: {
            requestedQueryCost: number;
            actualQueryCost: number;
            throttleStatus: {
                maximumAvailable: number;
                currentlyAvailable: number;
                restoreRate: number;
            };
        };
    };
}
