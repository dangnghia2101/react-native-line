export interface AccessToken {
    access_token: String;
    expires_in: String;
    id_token?: String;
}
export interface BotFriendshipStatus {
    friendFlag: boolean;
}
export interface AccessTokenVerifyResult {
    client_id: String;
    expires_in: String;
    scope: String;
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
    scope: String;
    userProfile?: UserProfile;
    friendshipStatusChanged?: boolean;
    IDTokenNonce?: String;
}
export interface UserProfile {
    userID: String;
    displayName: string;
    pictureURL?: string;
    statusMessage?: string;
}
