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
import type { InstructionType } from './InstructionType';
import {
    InstructionTypeFromJSON,
    InstructionTypeFromJSONTyped,
    InstructionTypeToJSON,
} from './InstructionType';
import type { ModuleItem } from './ModuleItem';
import {
    ModuleItemFromJSON,
    ModuleItemFromJSONTyped,
    ModuleItemToJSON,
} from './ModuleItem';

/**
 * 
 * @export
 * @interface TimelineAddToModule
 */
export interface TimelineAddToModule {
    /**
     * 
     * @type {string}
     * @memberof TimelineAddToModule
     */
    moduleEntryId: string;
    /**
     * 
     * @type {Array<ModuleItem>}
     * @memberof TimelineAddToModule
     */
    moduleItems: Array<ModuleItem>;
    /**
     * 
     * @type {boolean}
     * @memberof TimelineAddToModule
     */
    prepend?: boolean;
    /**
     * 
     * @type {InstructionType}
     * @memberof TimelineAddToModule
     */
    type: InstructionType;
}

/**
 * Check if a given object implements the TimelineAddToModule interface.
 */
export function instanceOfTimelineAddToModule(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "moduleEntryId" in value;
    isInstance = isInstance && "moduleItems" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function TimelineAddToModuleFromJSON(json: any): TimelineAddToModule {
    return TimelineAddToModuleFromJSONTyped(json, false);
}

export function TimelineAddToModuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimelineAddToModule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'moduleEntryId': json['moduleEntryId'],
        'moduleItems': ((json['moduleItems'] as Array<any>).map(ModuleItemFromJSON)),
        'prepend': !exists(json, 'prepend') ? undefined : json['prepend'],
        'type': InstructionTypeFromJSON(json['type']),
    };
}

export function TimelineAddToModuleToJSON(value?: TimelineAddToModule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'moduleEntryId': value.moduleEntryId,
        'moduleItems': ((value.moduleItems as Array<any>).map(ModuleItemToJSON)),
        'prepend': value.prepend,
        'type': InstructionTypeToJSON(value.type),
    };
}

