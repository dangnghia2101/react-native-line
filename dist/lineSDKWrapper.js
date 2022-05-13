"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAccessToken = exports.refreshToken = exports.logout = exports.login = exports.getProfile = exports.getCurrentAccessToken = exports.getBotFriendshipStatus = void 0;
const react_native_1 = require("react-native");
const deserializers_1 = require("./deserializers");
const { LineLogin } = react_native_1.NativeModules;
exports.getBotFriendshipStatus = async () => {
    const result = await LineLogin.getBotFriendshipStatus();
    const deserializedResult = deserializers_1.deserializeBotFriendshipStatus(result);
    return deserializedResult;
};
exports.getCurrentAccessToken = async () => {
    const result = await LineLogin.getCurrentAccessToken();
    const deserializedResult = deserializers_1.deserializeAccessToken(result);
    return deserializedResult;
};
exports.getProfile = async () => {
    const result = await LineLogin.getProfile();
    const deserializedResult = deserializers_1.deserializeUserProfile(result);
    return deserializedResult;
};
exports.login = async (args = {}) => {
    const result = await LineLogin.login(args);
    const deserializedResult = deserializers_1.deserializeLoginResult(result);
    return deserializedResult;
};
exports.logout = () => {
    return LineLogin.logout();
};
exports.refreshToken = async () => {
    const result = await LineLogin.refreshToken();
    const deserializedResult = deserializers_1.deserializeAccessToken(result);
    return deserializedResult;
};
exports.verifyAccessToken = async () => {
    const result = await LineLogin.verifyAccessToken();
    const deserializedResult = deserializers_1.deserializeVerifyAccessToken(result);
    return deserializedResult;
};
