"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUtil = void 0;
class MessageUtil {
    static success(data) {
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    }
    static error(code, message) {
        return {
            statusCode: code,
            body: JSON.stringify({ message }),
        };
    }
}
exports.MessageUtil = MessageUtil;
