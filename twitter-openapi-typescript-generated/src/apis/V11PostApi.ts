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


import * as runtime from '../runtime';

export interface PostCreateFriendshipsRequest {
    includeBlockedBy: number;
    includeBlocking: number;
    includeCanDm: number;
    includeCanMediaTag: number;
    includeExtHasNftAvatar: number;
    includeExtIsBlueVerified: number;
    includeExtProfileImageShape: number;
    includeExtVerifiedType: number;
    includeFollowedBy: number;
    includeMuteEdge: number;
    includeProfileInterstitialType: number;
    includeWantRetweets: number;
    skipStatus: number;
    userId: string;
}

export interface PostDestroyFriendshipsRequest {
    includeBlockedBy: number;
    includeBlocking: number;
    includeCanDm: number;
    includeCanMediaTag: number;
    includeExtHasNftAvatar: number;
    includeExtIsBlueVerified: number;
    includeExtProfileImageShape: number;
    includeExtVerifiedType: number;
    includeFollowedBy: number;
    includeMuteEdge: number;
    includeProfileInterstitialType: number;
    includeWantRetweets: number;
    skipStatus: number;
    userId: string;
}

/**
 * 
 */
export class V11PostApi extends runtime.BaseAPI {

    /**
     * post create friendships
     */
    async postCreateFriendshipsRaw(requestParameters: PostCreateFriendshipsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.includeBlockedBy === null || requestParameters.includeBlockedBy === undefined) {
            throw new runtime.RequiredError('includeBlockedBy','Required parameter requestParameters.includeBlockedBy was null or undefined when calling postCreateFriendships.');
        }

        if (requestParameters.includeBlocking === null || requestParameters.includeBlocking === undefined) {
            throw new runtime.RequiredError('includeBlocking','Required parameter requestParameters.includeBlocking was null or undefined when calling postCreateFriendships.');
        }

        if (requestParameters.includeCanDm === null || requestParameters.includeCanDm === undefined) {
            throw new runtime.RequiredError('includeCanDm','Required parameter requestParameters.includeCanDm was null or undefined when calling postCreateFriendships.');
        }

        if (requestParameters.includeCanMediaTag === null || requestParameters.includeCanMediaTag === undefined) {
            throw new runtime.RequiredError('includeCanMediaTag','Required parameter requestParameters.includeCanMediaTag was null or undefined when calling postCreateFriendships.');
        }

        if (requestParameters.includeExtHasNftAvatar === null || requestParameters.includeExtHasNftAvatar === undefined) {
            throw new runtime.RequiredError('includeExtHasNftAvatar','Required parameter requestParameters.includeExtHasNftAvatar was null or undefined when calling postCreateFriendships.');
        }

        if (requestParameters.includeExtIsBlueVerified === null || requestParameters.includeExtIsBlueVerified === undefined) {
            throw new runtime.RequiredError('includeExtIsBlueVerified','Required parameter requestParameters.includeExtIsBlueVerified was null or undefined when calling postCreateFriendships.');
        }

        if (requestParameters.includeExtProfileImageShape === null || requestParameters.includeExtProfileImageShape === undefined) {
            throw new runtime.RequiredError('includeExtProfileImageShape','Required parameter requestParameters.includeExtProfileImageShape was null or undefined when calling postCreateFriendships.');
        }

        if (requestParameters.includeExtVerifiedType === null || requestParameters.includeExtVerifiedType === undefined) {
            throw new runtime.RequiredError('includeExtVerifiedType','Required parameter requestParameters.includeExtVerifiedType was null or undefined when calling postCreateFriendships.');
        }

        if (requestParameters.includeFollowedBy === null || requestParameters.includeFollowedBy === undefined) {
            throw new runtime.RequiredError('includeFollowedBy','Required parameter requestParameters.includeFollowedBy was null or undefined when calling postCreateFriendships.');
        }

        if (requestParameters.includeMuteEdge === null || requestParameters.includeMuteEdge === undefined) {
            throw new runtime.RequiredError('includeMuteEdge','Required parameter requestParameters.includeMuteEdge was null or undefined when calling postCreateFriendships.');
        }

        if (requestParameters.includeProfileInterstitialType === null || requestParameters.includeProfileInterstitialType === undefined) {
            throw new runtime.RequiredError('includeProfileInterstitialType','Required parameter requestParameters.includeProfileInterstitialType was null or undefined when calling postCreateFriendships.');
        }

        if (requestParameters.includeWantRetweets === null || requestParameters.includeWantRetweets === undefined) {
            throw new runtime.RequiredError('includeWantRetweets','Required parameter requestParameters.includeWantRetweets was null or undefined when calling postCreateFriendships.');
        }

        if (requestParameters.skipStatus === null || requestParameters.skipStatus === undefined) {
            throw new runtime.RequiredError('skipStatus','Required parameter requestParameters.skipStatus was null or undefined when calling postCreateFriendships.');
        }

        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling postCreateFriendships.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-client-language"] = this.configuration.apiKey("x-twitter-client-language"); // ClientLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-active-user"] = this.configuration.apiKey("x-twitter-active-user"); // ActiveUser authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["user-agent"] = this.configuration.apiKey("user-agent"); // UserAgent authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-auth-type"] = this.configuration.apiKey("x-twitter-auth-type"); // AuthType authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-csrf-token"] = this.configuration.apiKey("x-csrf-token"); // CsrfToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-guest-token"] = this.configuration.apiKey("x-guest-token"); // GuestToken authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const consumes: runtime.Consume[] = [
            { contentType: 'application/x-www-form-urlencoded' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.includeBlockedBy !== undefined) {
            formParams.append('include_blocked_by', requestParameters.includeBlockedBy as any);
        }

        if (requestParameters.includeBlocking !== undefined) {
            formParams.append('include_blocking', requestParameters.includeBlocking as any);
        }

        if (requestParameters.includeCanDm !== undefined) {
            formParams.append('include_can_dm', requestParameters.includeCanDm as any);
        }

        if (requestParameters.includeCanMediaTag !== undefined) {
            formParams.append('include_can_media_tag', requestParameters.includeCanMediaTag as any);
        }

        if (requestParameters.includeExtHasNftAvatar !== undefined) {
            formParams.append('include_ext_has_nft_avatar', requestParameters.includeExtHasNftAvatar as any);
        }

        if (requestParameters.includeExtIsBlueVerified !== undefined) {
            formParams.append('include_ext_is_blue_verified', requestParameters.includeExtIsBlueVerified as any);
        }

        if (requestParameters.includeExtProfileImageShape !== undefined) {
            formParams.append('include_ext_profile_image_shape', requestParameters.includeExtProfileImageShape as any);
        }

        if (requestParameters.includeExtVerifiedType !== undefined) {
            formParams.append('include_ext_verified_type', requestParameters.includeExtVerifiedType as any);
        }

        if (requestParameters.includeFollowedBy !== undefined) {
            formParams.append('include_followed_by', requestParameters.includeFollowedBy as any);
        }

        if (requestParameters.includeMuteEdge !== undefined) {
            formParams.append('include_mute_edge', requestParameters.includeMuteEdge as any);
        }

        if (requestParameters.includeProfileInterstitialType !== undefined) {
            formParams.append('include_profile_interstitial_type', requestParameters.includeProfileInterstitialType as any);
        }

        if (requestParameters.includeWantRetweets !== undefined) {
            formParams.append('include_want_retweets', requestParameters.includeWantRetweets as any);
        }

        if (requestParameters.skipStatus !== undefined) {
            formParams.append('skip_status', requestParameters.skipStatus as any);
        }

        if (requestParameters.userId !== undefined) {
            formParams.append('user_id', requestParameters.userId as any);
        }

        const response = await this.request({
            path: `/1.1/friendships/create.json`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * post create friendships
     */
    async postCreateFriendships(requestParameters: PostCreateFriendshipsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postCreateFriendshipsRaw(requestParameters, initOverrides);
    }

    /**
     * post destroy friendships
     */
    async postDestroyFriendshipsRaw(requestParameters: PostDestroyFriendshipsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.includeBlockedBy === null || requestParameters.includeBlockedBy === undefined) {
            throw new runtime.RequiredError('includeBlockedBy','Required parameter requestParameters.includeBlockedBy was null or undefined when calling postDestroyFriendships.');
        }

        if (requestParameters.includeBlocking === null || requestParameters.includeBlocking === undefined) {
            throw new runtime.RequiredError('includeBlocking','Required parameter requestParameters.includeBlocking was null or undefined when calling postDestroyFriendships.');
        }

        if (requestParameters.includeCanDm === null || requestParameters.includeCanDm === undefined) {
            throw new runtime.RequiredError('includeCanDm','Required parameter requestParameters.includeCanDm was null or undefined when calling postDestroyFriendships.');
        }

        if (requestParameters.includeCanMediaTag === null || requestParameters.includeCanMediaTag === undefined) {
            throw new runtime.RequiredError('includeCanMediaTag','Required parameter requestParameters.includeCanMediaTag was null or undefined when calling postDestroyFriendships.');
        }

        if (requestParameters.includeExtHasNftAvatar === null || requestParameters.includeExtHasNftAvatar === undefined) {
            throw new runtime.RequiredError('includeExtHasNftAvatar','Required parameter requestParameters.includeExtHasNftAvatar was null or undefined when calling postDestroyFriendships.');
        }

        if (requestParameters.includeExtIsBlueVerified === null || requestParameters.includeExtIsBlueVerified === undefined) {
            throw new runtime.RequiredError('includeExtIsBlueVerified','Required parameter requestParameters.includeExtIsBlueVerified was null or undefined when calling postDestroyFriendships.');
        }

        if (requestParameters.includeExtProfileImageShape === null || requestParameters.includeExtProfileImageShape === undefined) {
            throw new runtime.RequiredError('includeExtProfileImageShape','Required parameter requestParameters.includeExtProfileImageShape was null or undefined when calling postDestroyFriendships.');
        }

        if (requestParameters.includeExtVerifiedType === null || requestParameters.includeExtVerifiedType === undefined) {
            throw new runtime.RequiredError('includeExtVerifiedType','Required parameter requestParameters.includeExtVerifiedType was null or undefined when calling postDestroyFriendships.');
        }

        if (requestParameters.includeFollowedBy === null || requestParameters.includeFollowedBy === undefined) {
            throw new runtime.RequiredError('includeFollowedBy','Required parameter requestParameters.includeFollowedBy was null or undefined when calling postDestroyFriendships.');
        }

        if (requestParameters.includeMuteEdge === null || requestParameters.includeMuteEdge === undefined) {
            throw new runtime.RequiredError('includeMuteEdge','Required parameter requestParameters.includeMuteEdge was null or undefined when calling postDestroyFriendships.');
        }

        if (requestParameters.includeProfileInterstitialType === null || requestParameters.includeProfileInterstitialType === undefined) {
            throw new runtime.RequiredError('includeProfileInterstitialType','Required parameter requestParameters.includeProfileInterstitialType was null or undefined when calling postDestroyFriendships.');
        }

        if (requestParameters.includeWantRetweets === null || requestParameters.includeWantRetweets === undefined) {
            throw new runtime.RequiredError('includeWantRetweets','Required parameter requestParameters.includeWantRetweets was null or undefined when calling postDestroyFriendships.');
        }

        if (requestParameters.skipStatus === null || requestParameters.skipStatus === undefined) {
            throw new runtime.RequiredError('skipStatus','Required parameter requestParameters.skipStatus was null or undefined when calling postDestroyFriendships.');
        }

        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling postDestroyFriendships.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-client-language"] = this.configuration.apiKey("x-twitter-client-language"); // ClientLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-active-user"] = this.configuration.apiKey("x-twitter-active-user"); // ActiveUser authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["user-agent"] = this.configuration.apiKey("user-agent"); // UserAgent authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-auth-type"] = this.configuration.apiKey("x-twitter-auth-type"); // AuthType authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-csrf-token"] = this.configuration.apiKey("x-csrf-token"); // CsrfToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-guest-token"] = this.configuration.apiKey("x-guest-token"); // GuestToken authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const consumes: runtime.Consume[] = [
            { contentType: 'application/x-www-form-urlencoded' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.includeBlockedBy !== undefined) {
            formParams.append('include_blocked_by', requestParameters.includeBlockedBy as any);
        }

        if (requestParameters.includeBlocking !== undefined) {
            formParams.append('include_blocking', requestParameters.includeBlocking as any);
        }

        if (requestParameters.includeCanDm !== undefined) {
            formParams.append('include_can_dm', requestParameters.includeCanDm as any);
        }

        if (requestParameters.includeCanMediaTag !== undefined) {
            formParams.append('include_can_media_tag', requestParameters.includeCanMediaTag as any);
        }

        if (requestParameters.includeExtHasNftAvatar !== undefined) {
            formParams.append('include_ext_has_nft_avatar', requestParameters.includeExtHasNftAvatar as any);
        }

        if (requestParameters.includeExtIsBlueVerified !== undefined) {
            formParams.append('include_ext_is_blue_verified', requestParameters.includeExtIsBlueVerified as any);
        }

        if (requestParameters.includeExtProfileImageShape !== undefined) {
            formParams.append('include_ext_profile_image_shape', requestParameters.includeExtProfileImageShape as any);
        }

        if (requestParameters.includeExtVerifiedType !== undefined) {
            formParams.append('include_ext_verified_type', requestParameters.includeExtVerifiedType as any);
        }

        if (requestParameters.includeFollowedBy !== undefined) {
            formParams.append('include_followed_by', requestParameters.includeFollowedBy as any);
        }

        if (requestParameters.includeMuteEdge !== undefined) {
            formParams.append('include_mute_edge', requestParameters.includeMuteEdge as any);
        }

        if (requestParameters.includeProfileInterstitialType !== undefined) {
            formParams.append('include_profile_interstitial_type', requestParameters.includeProfileInterstitialType as any);
        }

        if (requestParameters.includeWantRetweets !== undefined) {
            formParams.append('include_want_retweets', requestParameters.includeWantRetweets as any);
        }

        if (requestParameters.skipStatus !== undefined) {
            formParams.append('skip_status', requestParameters.skipStatus as any);
        }

        if (requestParameters.userId !== undefined) {
            formParams.append('user_id', requestParameters.userId as any);
        }

        const response = await this.request({
            path: `/1.1/friendships/destroy.json`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * post destroy friendships
     */
    async postDestroyFriendships(requestParameters: PostDestroyFriendshipsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.postDestroyFriendshipsRaw(requestParameters, initOverrides);
    }

}
