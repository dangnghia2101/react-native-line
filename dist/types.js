"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPermission = exports.BotPrompt = void 0;
var BotPrompt;
(function (BotPrompt) {
    BotPrompt["AGGRESSIVE"] = "aggressive";
    BotPrompt["NORMAL"] = "normal";
})(BotPrompt = exports.BotPrompt || (exports.BotPrompt = {}));
var LoginPermission;
(function (LoginPermission) {
    LoginPermission["EMAIL"] = "email";
    /// The permission to get an ID token in the login response.
    LoginPermission["OPEN_ID"] = "openid";
    /// The permission to get the user's profile including the user ID, display name, and the profile image
    /// URL in the login response.
    LoginPermission["PROFILE"] = "profile";
})(LoginPermission = exports.LoginPermission || (exports.LoginPermission = {}));
