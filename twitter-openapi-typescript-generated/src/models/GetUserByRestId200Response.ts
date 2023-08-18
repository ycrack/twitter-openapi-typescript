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
    UserResponse,
    instanceOfUserResponse,
    UserResponseFromJSON,
    UserResponseFromJSONTyped,
    UserResponseToJSON,
} from './UserResponse';

/**
 * @type GetUserByRestId200Response
 * 
 * @export
 */
export type GetUserByRestId200Response = Errors | UserResponse;

export function GetUserByRestId200ResponseFromJSON(json: any): GetUserByRestId200Response {
    return GetUserByRestId200ResponseFromJSONTyped(json, false);
}

export function GetUserByRestId200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUserByRestId200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...ErrorsFromJSONTyped(json, true), ...UserResponseFromJSONTyped(json, true) };
}

export function GetUserByRestId200ResponseToJSON(value?: GetUserByRestId200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfErrors(value)) {
        return ErrorsToJSON(value as Errors);
    }
    if (instanceOfUserResponse(value)) {
        return UserResponseToJSON(value as UserResponse);
    }

    return {};
}

