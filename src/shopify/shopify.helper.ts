import { GraphqlResult } from './shopify.type';

function getMillisToSleep(retryHeaderString: number) {
    let millisToSleep = Math.round(parseFloat(retryHeaderString.toString()) * 1000);
    if (isNaN(millisToSleep)) {
        millisToSleep = 1000;
    }
    return millisToSleep;
}

export function sleep(millis: number) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(`Sleep for ${millis} seconds`);
        }, millis);
    });
}

export async function fetchWithRetryBasedOnCost<T>(
    fetchAPI: () => Promise<GraphqlResult<T> | null>,
) {
    let retry = true;
    let responseJson: GraphqlResult<T> | null = null;

    while (retry) {
        responseJson = await fetchAPI();
        if (
            responseJson &&
            responseJson.errors &&
            responseJson.errors.length &&
            responseJson.errors[0]?.extensions?.code === 'THROTTLED'
        ) {
            const requestedQueryCost = responseJson.extensions.cost.requestedQueryCost;
            const currentlyAvailable =
                responseJson.extensions.cost.throttleStatus.currentlyAvailable;
            const restoreRate = responseJson.extensions.cost.throttleStatus.restoreRate;
            const timeToRestoreCost = Math.ceil(
                (requestedQueryCost - currentlyAvailable) / restoreRate,
            );
            const millisToSleep = getMillisToSleep(timeToRestoreCost);
            await sleep(millisToSleep);
        } else {
            retry = false;
        }
    }
    return responseJson;
}
