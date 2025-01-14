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
import type { SearchTimelineResponse } from './SearchTimelineResponse';
import {
    instanceOfSearchTimelineResponse,
    SearchTimelineResponseFromJSON,
    SearchTimelineResponseFromJSONTyped,
    SearchTimelineResponseToJSON,
} from './SearchTimelineResponse';

/**
 * @type GetSearchTimeline200Response
 * 
 * @export
 */
export type GetSearchTimeline200Response = Errors | SearchTimelineResponse;

export function GetSearchTimeline200ResponseFromJSON(json: any): GetSearchTimeline200Response {
    return GetSearchTimeline200ResponseFromJSONTyped(json, false);
}

export function GetSearchTimeline200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetSearchTimeline200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...ErrorsFromJSONTyped(json, true), ...SearchTimelineResponseFromJSONTyped(json, true) };
}

export function GetSearchTimeline200ResponseToJSON(value?: GetSearchTimeline200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfErrors(value)) {
        return ErrorsToJSON(value as Errors);
    }
    if (instanceOfSearchTimelineResponse(value)) {
        return SearchTimelineResponseToJSON(value as SearchTimelineResponse);
    }

    return {};
}

