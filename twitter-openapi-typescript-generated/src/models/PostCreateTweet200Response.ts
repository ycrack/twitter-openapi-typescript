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
    CreateTweetResponse,
    instanceOfCreateTweetResponse,
    CreateTweetResponseFromJSON,
    CreateTweetResponseFromJSONTyped,
    CreateTweetResponseToJSON,
} from './CreateTweetResponse';
import {
    Errors,
    instanceOfErrors,
    ErrorsFromJSON,
    ErrorsFromJSONTyped,
    ErrorsToJSON,
} from './Errors';

/**
 * @type PostCreateTweet200Response
 * 
 * @export
 */
export type PostCreateTweet200Response = CreateTweetResponse | Errors;

export function PostCreateTweet200ResponseFromJSON(json: any): PostCreateTweet200Response {
    return PostCreateTweet200ResponseFromJSONTyped(json, false);
}

export function PostCreateTweet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostCreateTweet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...CreateTweetResponseFromJSONTyped(json, true), ...ErrorsFromJSONTyped(json, true) };
}

export function PostCreateTweet200ResponseToJSON(value?: PostCreateTweet200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfCreateTweetResponse(value)) {
        return CreateTweetResponseToJSON(value as CreateTweetResponse);
    }
    if (instanceOfErrors(value)) {
        return ErrorsToJSON(value as Errors);
    }

    return {};
}

