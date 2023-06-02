import * as i from 'twitter-openapi-typescript-generated';
import { DefaultFlag, ApiUtilsRaw, UserListApiUtilsResponse } from '@/types';
import {
  RequestParam,
  buildHeader,
  buildUserResponse,
  entriesCursor,
  instructionToEntry,
  userEntriesConverter,
} from '@/models';

type GetFollowers = {
  userId: string;
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetFollowing = {
  userId: string;
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

export class UserListApiUtils {
  api: i.UserListApi;
  flag: DefaultFlag;

  constructor(api: i.UserListApi, flag: DefaultFlag) {
    this.api = api;
    this.flag = flag;
  }

  async request<T>(param: RequestParam<i.InstructionUnion[], T>): Promise<UserListApiUtilsResponse> {
    const response = await param.apiFn.bind(this.api)({
      queryId: this.flag[param.key]['queryId'],
      variables: JSON.stringify({ ...this.flag[param.key]['variables'], ...param }),
      features: JSON.stringify(this.flag[param.key]['features']),
    });
    const instruction = param.convertFn((await response.value()) as T);
    const entry = instructionToEntry(instruction);
    const userList = userEntriesConverter(entry);
    const data = userList.map((user) => buildUserResponse(user));

    const raw: ApiUtilsRaw = {
      response: response.raw,
      instruction: instruction,
      entry: entry,
    };
    return {
      raw: raw,
      header: buildHeader(response.raw.headers),
      cursor: entriesCursor(entry),
      data: data,
    };
  }

  async getFollowers(param: GetFollowers): Promise<UserListApiUtilsResponse> {
    return await this.request({
      apiFn: this.api.getFollowersRaw,
      convertFn: (e) => e.data.user.result.timeline.timeline.instructions,
      key: 'getFollowers',
      param: param,
    });
  }
  async getFollowing(param: GetFollowing): Promise<UserListApiUtilsResponse> {
    return await this.request({
      apiFn: this.api.getFollowingRaw,
      convertFn: (e) => e.data.user.result.timeline.timeline.instructions,
      key: 'getFollowing',
      param: param,
    });
  }
}
