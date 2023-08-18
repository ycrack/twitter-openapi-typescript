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
    CreateRetweetResponse,
    instanceOfCreateRetweetResponse,
    CreateRetweetResponseFromJSON,
    CreateRetweetResponseFromJSONTyped,
    CreateRetweetResponseToJSON,
} from './CreateRetweetResponse';
import {
    Errors,
    instanceOfErrors,
    ErrorsFromJSON,
    ErrorsFromJSONTyped,
    ErrorsToJSON,
} from './Errors';

/**
 * @type PostCreateRetweet200Response
 * 
 * @export
 */
export type PostCreateRetweet200Response = CreateRetweetResponse | Errors;

export function PostCreateRetweet200ResponseFromJSON(json: any): PostCreateRetweet200Response {
    return PostCreateRetweet200ResponseFromJSONTyped(json, false);
}

export function PostCreateRetweet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostCreateRetweet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...CreateRetweetResponseFromJSONTyped(json, true), ...ErrorsFromJSONTyped(json, true) };
}

export function PostCreateRetweet200ResponseToJSON(value?: PostCreateRetweet200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfCreateRetweetResponse(value)) {
        return CreateRetweetResponseToJSON(value as CreateRetweetResponse);
    }
    if (instanceOfErrors(value)) {
        return ErrorsToJSON(value as Errors);
    }

    return {};
}

