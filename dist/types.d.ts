export interface AccessToken {
    access_token: string;
    expires_in: string;
    id_token?: string;
}
export interface BotFriendshipStatus {
    friendFlag: boolean;
}
export interface AccessTokenVerifyResult {
    client_id: string;
    expires_in: string;
    scope: string;
}
export declare enum BotPrompt {
    AGGRESSIVE = "aggressive",
    NORMAL = "normal"
}
export interface LoginArguments {
    scopes?: LoginPermission[];
    onlyWebLogin?: boolean;
    botPrompt?: BotPrompt;
}
export declare enum LoginPermission {
    EMAIL = "email",
    OPEN_ID = "openid",
    PROFILE = "profile"
}
export interface LoginResult {
    accessToken: AccessToken;
    scope: string;
    userProfile?: UserProfile;
    friendshipStatusChanged?: boolean;
    IDTokenNonce?: string;
}
export interface UserProfile {
    userID: string;
    displayName: string;
    pictureURL?: string;
    statusMessage?: string;
}
