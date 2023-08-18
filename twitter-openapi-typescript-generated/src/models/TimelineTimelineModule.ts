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
import type { ContentEntryType } from './ContentEntryType';
import {
    ContentEntryTypeFromJSON,
    ContentEntryTypeFromJSONTyped,
    ContentEntryTypeToJSON,
} from './ContentEntryType';
import type { ModuleItem } from './ModuleItem';
import {
    ModuleItemFromJSON,
    ModuleItemFromJSONTyped,
    ModuleItemToJSON,
} from './ModuleItem';
import type { TypeName } from './TypeName';
import {
    TypeNameFromJSON,
    TypeNameFromJSONTyped,
    TypeNameToJSON,
} from './TypeName';

/**
 * 
 * @export
 * @interface TimelineTimelineModule
 */
export interface TimelineTimelineModule {
    /**
     * 
     * @type {TypeName}
     * @memberof TimelineTimelineModule
     */
    typename: TypeName;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof TimelineTimelineModule
     */
    clientEventInfo: { [key: string]: any; };
    /**
     * 
     * @type {string}
     * @memberof TimelineTimelineModule
     */
    displayType: string;
    /**
     * 
     * @type {ContentEntryType}
     * @memberof TimelineTimelineModule
     */
    entryType: ContentEntryType;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof TimelineTimelineModule
     */
    footer?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof TimelineTimelineModule
     */
    header?: { [key: string]: any; };
    /**
     * 
     * @type {Array<ModuleItem>}
     * @memberof TimelineTimelineModule
     */
    items?: Array<ModuleItem>;
}

/**
 * Check if a given object implements the TimelineTimelineModule interface.
 */
export function instanceOfTimelineTimelineModule(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "typename" in value;
    isInstance = isInstance && "clientEventInfo" in value;
    isInstance = isInstance && "displayType" in value;
    isInstance = isInstance && "entryType" in value;

    return isInstance;
}

export function TimelineTimelineModuleFromJSON(json: any): TimelineTimelineModule {
    return TimelineTimelineModuleFromJSONTyped(json, false);
}

export function TimelineTimelineModuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimelineTimelineModule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'typename': TypeNameFromJSON(json['__typename']),
        'clientEventInfo': json['clientEventInfo'],
        'displayType': json['displayType'],
        'entryType': ContentEntryTypeFromJSON(json['entryType']),
        'footer': !exists(json, 'footer') ? undefined : json['footer'],
        'header': !exists(json, 'header') ? undefined : json['header'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(ModuleItemFromJSON)),
    };
}

export function TimelineTimelineModuleToJSON(value?: TimelineTimelineModule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '__typename': TypeNameToJSON(value.typename),
        'clientEventInfo': value.clientEventInfo,
        'displayType': value.displayType,
        'entryType': ContentEntryTypeToJSON(value.entryType),
        'footer': value.footer,
        'header': value.header,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(ModuleItemToJSON)),
    };
}

