import { AccessToken, AccessTokenVerifyResult, BotFriendshipStatus, LoginResult, UserProfile } from '../types';
export declare const deserializeLoginResult: (data: any) => LoginResult;
export declare const deserializeAccessToken: (data: any) => AccessToken;
export declare const deserializeUserProfile: (data: any) => UserProfile;
export declare const deserializeVerifyAccessToken: (data: any) => AccessTokenVerifyResult;
export declare const deserializeBotFriendshipStatus: (data: any) => BotFriendshipStatus;
