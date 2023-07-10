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

/**
 * 
 * @export
 * @interface TimelineMessagePrompt
 */
export interface TimelineMessagePrompt {
    /**
     * 
     * @type {TypeName}
     * @memberof TimelineMessagePrompt
     */
    typename?: TypeName;
}

/**
 * Check if a given object implements the TimelineMessagePrompt interface.
 */
export function instanceOfTimelineMessagePrompt(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TimelineMessagePromptFromJSON(json: any): TimelineMessagePrompt {
    return TimelineMessagePromptFromJSONTyped(json, false);
}

export function TimelineMessagePromptFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimelineMessagePrompt {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'typename': !exists(json, '__typename') ? undefined : TypeNameFromJSON(json['__typename']),
    };
}

export function TimelineMessagePromptToJSON(value?: TimelineMessagePrompt | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '__typename': TypeNameToJSON(value.typename),
    };
}

