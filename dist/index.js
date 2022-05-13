"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lineSDKWrapper_1 = require("./lineSDKWrapper");
var types_1 = require("./types");
Object.defineProperty(exports, "LoginPermission", { enumerable: true, get: function () { return types_1.LoginPermission; } });
Object.defineProperty(exports, "BotPrompt", { enumerable: true, get: function () { return types_1.BotPrompt; } });
exports.default = {
    getBotFriendshipStatus() {
        return lineSDKWrapper_1.getBotFriendshipStatus();
    },
    getCurrentAccessToken() {
        return lineSDKWrapper_1.getCurrentAccessToken();
    },
    getProfile() {
        return lineSDKWrapper_1.getProfile();
    },
    login(args = {}) {
        return lineSDKWrapper_1.login(args);
    },
    logout() {
        return lineSDKWrapper_1.logout();
    },
    refreshToken() {
        return lineSDKWrapper_1.refreshToken();
    },
    verifyAccessToken() {
        return lineSDKWrapper_1.verifyAccessToken();
    },
};
