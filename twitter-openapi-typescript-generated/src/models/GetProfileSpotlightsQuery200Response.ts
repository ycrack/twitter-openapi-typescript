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

import {
    Errors,
    instanceOfErrors,
    ErrorsFromJSON,
    ErrorsFromJSONTyped,
    ErrorsToJSON,
} from './Errors';
import {
    ProfileResponse,
    instanceOfProfileResponse,
    ProfileResponseFromJSON,
    ProfileResponseFromJSONTyped,
    ProfileResponseToJSON,
} from './ProfileResponse';

/**
 * @type GetProfileSpotlightsQuery200Response
 * 
 * @export
 */
export type GetProfileSpotlightsQuery200Response = Errors | ProfileResponse;

export function GetProfileSpotlightsQuery200ResponseFromJSON(json: any): GetProfileSpotlightsQuery200Response {
    return GetProfileSpotlightsQuery200ResponseFromJSONTyped(json, false);
}

export function GetProfileSpotlightsQuery200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetProfileSpotlightsQuery200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...ErrorsFromJSONTyped(json, true), ...ProfileResponseFromJSONTyped(json, true) };
}

export function GetProfileSpotlightsQuery200ResponseToJSON(value?: GetProfileSpotlightsQuery200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfErrors(value)) {
        return ErrorsToJSON(value as Errors);
    }
    if (instanceOfProfileResponse(value)) {
        return ProfileResponseToJSON(value as ProfileResponse);
    }

    return {};
}

