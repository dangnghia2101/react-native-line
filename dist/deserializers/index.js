"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeBotFriendshipStatus = exports.deserializeVerifyAccessToken = exports.deserializeUserProfile = exports.deserializeAccessToken = exports.deserializeLoginResult = void 0;
exports.deserializeLoginResult = (data) => ({
    IDTokenNonce: data.IDTokenNonce,
    accessToken: exports.deserializeAccessToken(data.accessToken),
    friendshipStatusChanged: data.friendshipStatusChanged,
    scope: data.scope,
    userProfile: exports.deserializeUserProfile(data.userProfile),
});
exports.deserializeAccessToken = (data) => ({
    access_token: data.access_token,
    expires_in: data.expires_in,
    id_token: data.id_token ?? undefined,
});
exports.deserializeUserProfile = (data) => ({
    displayName: data.displayName,
    pictureURL: data.pictureURL ?? undefined,
    statusMessage: data.statusMessage ?? undefined,
    userID: data.userId ?? data.userID,
});
exports.deserializeVerifyAccessToken = (data) => ({
    client_id: data.client_id,
    expires_in: data.expires_in,
    scope: data.scope,
});
exports.deserializeBotFriendshipStatus = (data) => ({
    friendFlag: data.friendFlag ?? false,
});
