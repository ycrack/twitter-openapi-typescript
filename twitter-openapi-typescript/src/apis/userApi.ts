import { UserApiUtilsRaw } from './../types/user';
import * as i from 'twitter-openapi-typescript-generated/dist';
import { DefaultFlag } from '@/types/flag';
import { ApiFunction, RequestParam } from '@/models/type';
import { TweetListApiUtilsResponse } from '@/types/tweet';
import { UserApiUtilsResponse } from '@/types/user';
import { buildHeader, instructionToEntry } from '@/models/api';

type getUserByScreenNameParam = {
  screenName: string;
  extraParam?: { [key: string]: any };
};

export class UserApiUtils {
  api: i.UserApi;
  flag: DefaultFlag;

  constructor(api: i.UserApi, flag: DefaultFlag) {
    this.api = api;
    this.flag = flag;
  }

  async request<T>(param: RequestParam<i.UserResults, T>): Promise<UserApiUtilsResponse> {
    const response = await param.apiFn.bind(this.api)({
      queryId: this.flag[param.key]['queryId'],
      variables: JSON.stringify({ ...this.flag[param.key]['variables'], ...param }),
      features: JSON.stringify(this.flag[param.key]['features']),
    });
    const user = param.convertFn((await response.value()) as T);
    const raw: UserApiUtilsRaw = {
      response: response.raw,
    };
    return {
      raw: raw,
      header: buildHeader(response.raw.headers),
      data: user.result,
    };
  }
  async getUserByScreenName(param: getUserByScreenNameParam): Promise<UserApiUtilsResponse> {
    return this.request({
      key: 'UserByScreenName',
      apiFn: this.api.getUserByScreenNameRaw,
      convertFn: (e) => e.data.user,
      param: param,
    });
  }
}
