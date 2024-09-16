"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var email_1 = require("../value-objects/email");
var User = /** @class */ (function () {
    function User(_a) {
        var id = _a.id, username = _a.username, email = _a.email, password = _a.password;
        this.id = id;
        this.username = username;
        this.email = new email_1.Email(email);
        this.password = password;
    }
    return User;
}());
exports.User = User;
