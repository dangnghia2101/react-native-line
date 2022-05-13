import { LoginArguments } from './types';
export { BotFriendshipStatus, AccessToken, AccessTokenVerifyResult, LoginArguments, LoginPermission, LoginResult, BotPrompt, UserProfile, } from './types';
declare const _default: {
    getBotFriendshipStatus(): Promise<import("./types").BotFriendshipStatus>;
    getCurrentAccessToken(): Promise<import("./types").AccessToken>;
    getProfile(): Promise<import("./types").UserProfile>;
    login(args?: LoginArguments): Promise<import("./types").LoginResult>;
    logout(): any;
    refreshToken(): Promise<import("./types").AccessToken>;
    verifyAccessToken(): Promise<import("./types").AccessTokenVerifyResult>;
};
export default _default;
