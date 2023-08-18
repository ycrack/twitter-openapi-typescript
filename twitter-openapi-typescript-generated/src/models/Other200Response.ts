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
    OtherResponse,
    instanceOfOtherResponse,
    OtherResponseFromJSON,
    OtherResponseFromJSONTyped,
    OtherResponseToJSON,
} from './OtherResponse';

/**
 * @type Other200Response
 * 
 * @export
 */
export type Other200Response = OtherResponse;

export function Other200ResponseFromJSON(json: any): Other200Response {
    return Other200ResponseFromJSONTyped(json, false);
}

export function Other200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Other200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...OtherResponseFromJSONTyped(json, true) };
}

export function Other200ResponseToJSON(value?: Other200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfOtherResponse(value)) {
        return OtherResponseToJSON(value as OtherResponse);
    }

    return {};
}

