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
/**
 * 
 * @export
 * @interface PostCreateTweetRequestVariablesMediaMediaEntitiesInner
 */
export interface PostCreateTweetRequestVariablesMediaMediaEntitiesInner {
    /**
     * 
     * @type {string}
     * @memberof PostCreateTweetRequestVariablesMediaMediaEntitiesInner
     */
    mediaId: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof PostCreateTweetRequestVariablesMediaMediaEntitiesInner
     */
    taggedUsers: Array<object>;
}

/**
 * Check if a given object implements the PostCreateTweetRequestVariablesMediaMediaEntitiesInner interface.
 */
export function instanceOfPostCreateTweetRequestVariablesMediaMediaEntitiesInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "mediaId" in value;
    isInstance = isInstance && "taggedUsers" in value;

    return isInstance;
}

export function PostCreateTweetRequestVariablesMediaMediaEntitiesInnerFromJSON(json: any): PostCreateTweetRequestVariablesMediaMediaEntitiesInner {
    return PostCreateTweetRequestVariablesMediaMediaEntitiesInnerFromJSONTyped(json, false);
}

export function PostCreateTweetRequestVariablesMediaMediaEntitiesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostCreateTweetRequestVariablesMediaMediaEntitiesInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mediaId': json['media_id'],
        'taggedUsers': json['tagged_users'],
    };
}

export function PostCreateTweetRequestVariablesMediaMediaEntitiesInnerToJSON(value?: PostCreateTweetRequestVariablesMediaMediaEntitiesInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'media_id': value.mediaId,
        'tagged_users': value.taggedUsers,
    };
}

