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
    TimelineAddEntries,
    instanceOfTimelineAddEntries,
    TimelineAddEntriesFromJSON,
    TimelineAddEntriesFromJSONTyped,
    TimelineAddEntriesToJSON,
} from './TimelineAddEntries';
import {
    TimelineAddToModule,
    instanceOfTimelineAddToModule,
    TimelineAddToModuleFromJSON,
    TimelineAddToModuleFromJSONTyped,
    TimelineAddToModuleToJSON,
} from './TimelineAddToModule';
import {
    TimelineClearCache,
    instanceOfTimelineClearCache,
    TimelineClearCacheFromJSON,
    TimelineClearCacheFromJSONTyped,
    TimelineClearCacheToJSON,
} from './TimelineClearCache';
import {
    TimelinePinEntry,
    instanceOfTimelinePinEntry,
    TimelinePinEntryFromJSON,
    TimelinePinEntryFromJSONTyped,
    TimelinePinEntryToJSON,
} from './TimelinePinEntry';
import {
    TimelineReplaceEntry,
    instanceOfTimelineReplaceEntry,
    TimelineReplaceEntryFromJSON,
    TimelineReplaceEntryFromJSONTyped,
    TimelineReplaceEntryToJSON,
} from './TimelineReplaceEntry';
import {
    TimelineShowAlert,
    instanceOfTimelineShowAlert,
    TimelineShowAlertFromJSON,
    TimelineShowAlertFromJSONTyped,
    TimelineShowAlertToJSON,
} from './TimelineShowAlert';
import {
    TimelineTerminateTimeline,
    instanceOfTimelineTerminateTimeline,
    TimelineTerminateTimelineFromJSON,
    TimelineTerminateTimelineFromJSONTyped,
    TimelineTerminateTimelineToJSON,
} from './TimelineTerminateTimeline';

/**
 * @type InstructionUnion
 * 
 * @export
 */
export type InstructionUnion = { type: 'TimelineAddEntries' } & TimelineAddEntries | { type: 'TimelineAddToModule' } & TimelineAddToModule | { type: 'TimelineClearCache' } & TimelineClearCache | { type: 'TimelinePinEntry' } & TimelinePinEntry | { type: 'TimelineReplaceEntry' } & TimelineReplaceEntry | { type: 'TimelineShowAlert' } & TimelineShowAlert | { type: 'TimelineTerminateTimeline' } & TimelineTerminateTimeline;

export function InstructionUnionFromJSON(json: any): InstructionUnion {
    return InstructionUnionFromJSONTyped(json, false);
}

export function InstructionUnionFromJSONTyped(json: any, ignoreDiscriminator: boolean): InstructionUnion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'TimelineAddEntries':
            return {...TimelineAddEntriesFromJSONTyped(json, true), type: 'TimelineAddEntries'};
        case 'TimelineAddToModule':
            return {...TimelineAddToModuleFromJSONTyped(json, true), type: 'TimelineAddToModule'};
        case 'TimelineClearCache':
            return {...TimelineClearCacheFromJSONTyped(json, true), type: 'TimelineClearCache'};
        case 'TimelinePinEntry':
            return {...TimelinePinEntryFromJSONTyped(json, true), type: 'TimelinePinEntry'};
        case 'TimelineReplaceEntry':
            return {...TimelineReplaceEntryFromJSONTyped(json, true), type: 'TimelineReplaceEntry'};
        case 'TimelineShowAlert':
            return {...TimelineShowAlertFromJSONTyped(json, true), type: 'TimelineShowAlert'};
        case 'TimelineTerminateTimeline':
            return {...TimelineTerminateTimelineFromJSONTyped(json, true), type: 'TimelineTerminateTimeline'};
        default:
            throw new Error(`No variant of InstructionUnion exists with 'type=${json['type']}'`);
    }
}

export function InstructionUnionToJSON(value?: InstructionUnion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'TimelineAddEntries':
            return TimelineAddEntriesToJSON(value);
        case 'TimelineAddToModule':
            return TimelineAddToModuleToJSON(value);
        case 'TimelineClearCache':
            return TimelineClearCacheToJSON(value);
        case 'TimelinePinEntry':
            return TimelinePinEntryToJSON(value);
        case 'TimelineReplaceEntry':
            return TimelineReplaceEntryToJSON(value);
        case 'TimelineShowAlert':
            return TimelineShowAlertToJSON(value);
        case 'TimelineTerminateTimeline':
            return TimelineTerminateTimelineToJSON(value);
        default:
            throw new Error(`No variant of InstructionUnion exists with 'type=${value['type']}'`);
    }

}

