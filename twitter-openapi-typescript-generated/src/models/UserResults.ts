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

import { exists, mapValues } from '../runtime';
import type { UserUnion } from './UserUnion';
import {
    UserUnionFromJSON,
    UserUnionFromJSONTyped,
    UserUnionToJSON,
} from './UserUnion';

/**
 * 
 * @export
 * @interface UserResults
 */
export interface UserResults {
    /**
     * 
     * @type {UserUnion}
     * @memberof UserResults
     */
    result: UserUnion;
}

/**
 * Check if a given object implements the UserResults interface.
 */
export function instanceOfUserResults(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result" in value;

    return isInstance;
}

export function UserResultsFromJSON(json: any): UserResults {
    return UserResultsFromJSONTyped(json, false);
}

export function UserResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserResults {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': UserUnionFromJSON(json['result']),
    };
}

export function UserResultsToJSON(value?: UserResults | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': UserUnionToJSON(value.result),
    };
}

