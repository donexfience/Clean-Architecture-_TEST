"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
var Email = /** @class */ (function () {
    function Email(address) {
        this.address = address;
        if (!this.validate(address)) {
            throw new Error("Invalid email address");
        }
    }
    Email.prototype.validate = function (address) {
        return /\S+@\S+\.\S+/.test(address);
    };
    return Email;
}());
exports.Email = Email;
