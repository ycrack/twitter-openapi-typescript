/* tslint:disable */
/* eslint-disable */
/**
 * Twitter OpenAPI
 * Twitter OpenAPI(Swagger) specification
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: yuki@yuki0311.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Errors } from './Errors';
import {
    instanceOfErrors,
    ErrorsFromJSON,
    ErrorsFromJSONTyped,
    ErrorsToJSON,
} from './Errors';
import type { ListLatestTweetsTimelineResponse } from './ListLatestTweetsTimelineResponse';
import {
    instanceOfListLatestTweetsTimelineResponse,
    ListLatestTweetsTimelineResponseFromJSON,
    ListLatestTweetsTimelineResponseFromJSONTyped,
    ListLatestTweetsTimelineResponseToJSON,
} from './ListLatestTweetsTimelineResponse';

/**
 * @type GetListLatestTweetsTimeline200Response
 * 
 * @export
 */
export type GetListLatestTweetsTimeline200Response = Errors | ListLatestTweetsTimelineResponse;

export function GetListLatestTweetsTimeline200ResponseFromJSON(json: any): GetListLatestTweetsTimeline200Response {
    return GetListLatestTweetsTimeline200ResponseFromJSONTyped(json, false);
}

export function GetListLatestTweetsTimeline200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetListLatestTweetsTimeline200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...ErrorsFromJSONTyped(json, true), ...ListLatestTweetsTimelineResponseFromJSONTyped(json, true) };
}

export function GetListLatestTweetsTimeline200ResponseToJSON(value?: GetListLatestTweetsTimeline200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfErrors(value)) {
        return ErrorsToJSON(value as Errors);
    }
    if (instanceOfListLatestTweetsTimelineResponse(value)) {
        return ListLatestTweetsTimelineResponseToJSON(value as ListLatestTweetsTimelineResponse);
    }

    return {};
}

