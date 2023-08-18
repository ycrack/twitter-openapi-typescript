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
import type { TypeName } from './TypeName';
import {
    TypeNameFromJSON,
    TypeNameFromJSONTyped,
    TypeNameToJSON,
} from './TypeName';
import type { UserHighlightsTweetsTimeline } from './UserHighlightsTweetsTimeline';
import {
    UserHighlightsTweetsTimelineFromJSON,
    UserHighlightsTweetsTimelineFromJSONTyped,
    UserHighlightsTweetsTimelineToJSON,
} from './UserHighlightsTweetsTimeline';

/**
 * 
 * @export
 * @interface UserHighlightsTweetsResult
 */
export interface UserHighlightsTweetsResult {
    /**
     * 
     * @type {TypeName}
     * @memberof UserHighlightsTweetsResult
     */
    typename: TypeName;
    /**
     * 
     * @type {UserHighlightsTweetsTimeline}
     * @memberof UserHighlightsTweetsResult
     */
    timeline: UserHighlightsTweetsTimeline;
}

/**
 * Check if a given object implements the UserHighlightsTweetsResult interface.
 */
export function instanceOfUserHighlightsTweetsResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "typename" in value;
    isInstance = isInstance && "timeline" in value;

    return isInstance;
}

export function UserHighlightsTweetsResultFromJSON(json: any): UserHighlightsTweetsResult {
    return UserHighlightsTweetsResultFromJSONTyped(json, false);
}

export function UserHighlightsTweetsResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserHighlightsTweetsResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'typename': TypeNameFromJSON(json['__typename']),
        'timeline': UserHighlightsTweetsTimelineFromJSON(json['timeline']),
    };
}

export function UserHighlightsTweetsResultToJSON(value?: UserHighlightsTweetsResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '__typename': TypeNameToJSON(value.typename),
        'timeline': UserHighlightsTweetsTimelineToJSON(value.timeline),
    };
}

