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

import type { TimelineCommunity } from './TimelineCommunity';
import {
    instanceOfTimelineCommunity,
    TimelineCommunityFromJSON,
    TimelineCommunityFromJSONTyped,
    TimelineCommunityToJSON,
} from './TimelineCommunity';
import type { TimelineMessagePrompt } from './TimelineMessagePrompt';
import {
    instanceOfTimelineMessagePrompt,
    TimelineMessagePromptFromJSON,
    TimelineMessagePromptFromJSONTyped,
    TimelineMessagePromptToJSON,
} from './TimelineMessagePrompt';
import type { TimelinePrompt } from './TimelinePrompt';
import {
    instanceOfTimelinePrompt,
    TimelinePromptFromJSON,
    TimelinePromptFromJSONTyped,
    TimelinePromptToJSON,
} from './TimelinePrompt';
import type { TimelineTimelineCursor } from './TimelineTimelineCursor';
import {
    instanceOfTimelineTimelineCursor,
    TimelineTimelineCursorFromJSON,
    TimelineTimelineCursorFromJSONTyped,
    TimelineTimelineCursorToJSON,
} from './TimelineTimelineCursor';
import type { TimelineTweet } from './TimelineTweet';
import {
    instanceOfTimelineTweet,
    TimelineTweetFromJSON,
    TimelineTweetFromJSONTyped,
    TimelineTweetToJSON,
} from './TimelineTweet';
import type { TimelineUser } from './TimelineUser';
import {
    instanceOfTimelineUser,
    TimelineUserFromJSON,
    TimelineUserFromJSONTyped,
    TimelineUserToJSON,
} from './TimelineUser';

/**
 * @type ItemContentUnion
 * 
 * @export
 */
export type ItemContentUnion = { typename: 'TimelineCommunity' } & TimelineCommunity | { typename: 'TimelineMessagePrompt' } & TimelineMessagePrompt | { typename: 'TimelinePrompt' } & TimelinePrompt | { typename: 'TimelineTimelineCursor' } & TimelineTimelineCursor | { typename: 'TimelineTweet' } & TimelineTweet | { typename: 'TimelineUser' } & TimelineUser;

export function ItemContentUnionFromJSON(json: any): ItemContentUnion {
    return ItemContentUnionFromJSONTyped(json, false);
}

export function ItemContentUnionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemContentUnion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['__typename']) {
        case 'TimelineCommunity':
            return {...TimelineCommunityFromJSONTyped(json, true), typename: 'TimelineCommunity'};
        case 'TimelineMessagePrompt':
            return {...TimelineMessagePromptFromJSONTyped(json, true), typename: 'TimelineMessagePrompt'};
        case 'TimelinePrompt':
            return {...TimelinePromptFromJSONTyped(json, true), typename: 'TimelinePrompt'};
        case 'TimelineTimelineCursor':
            return {...TimelineTimelineCursorFromJSONTyped(json, true), typename: 'TimelineTimelineCursor'};
        case 'TimelineTweet':
            return {...TimelineTweetFromJSONTyped(json, true), typename: 'TimelineTweet'};
        case 'TimelineUser':
            return {...TimelineUserFromJSONTyped(json, true), typename: 'TimelineUser'};
        default:
            throw new Error(`No variant of ItemContentUnion exists with 'typename=${json['typename']}'`);
    }
}

export function ItemContentUnionToJSON(value?: ItemContentUnion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['typename']) {
        case 'TimelineCommunity':
            return TimelineCommunityToJSON(value);
        case 'TimelineMessagePrompt':
            return TimelineMessagePromptToJSON(value);
        case 'TimelinePrompt':
            return TimelinePromptToJSON(value);
        case 'TimelineTimelineCursor':
            return TimelineTimelineCursorToJSON(value);
        case 'TimelineTweet':
            return TimelineTweetToJSON(value);
        case 'TimelineUser':
            return TimelineUserToJSON(value);
        default:
            throw new Error(`No variant of ItemContentUnion exists with 'typename=${value['typename']}'`);
    }

}

