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
import type { DeleteRetweet } from './DeleteRetweet';
import {
    DeleteRetweetFromJSON,
    DeleteRetweetFromJSONTyped,
    DeleteRetweetToJSON,
} from './DeleteRetweet';

/**
 * 
 * @export
 * @interface DeleteRetweetResponseResult
 */
export interface DeleteRetweetResponseResult {
    /**
     * 
     * @type {DeleteRetweet}
     * @memberof DeleteRetweetResponseResult
     */
    retweetResults?: DeleteRetweet;
}

/**
 * Check if a given object implements the DeleteRetweetResponseResult interface.
 */
export function instanceOfDeleteRetweetResponseResult(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeleteRetweetResponseResultFromJSON(json: any): DeleteRetweetResponseResult {
    return DeleteRetweetResponseResultFromJSONTyped(json, false);
}

export function DeleteRetweetResponseResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteRetweetResponseResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'retweetResults': !exists(json, 'retweet_results') ? undefined : DeleteRetweetFromJSON(json['retweet_results']),
    };
}

export function DeleteRetweetResponseResultToJSON(value?: DeleteRetweetResponseResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'retweet_results': DeleteRetweetToJSON(value.retweetResults),
    };
}
