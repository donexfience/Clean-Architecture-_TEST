"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGrpcApp = void 0;
var user_grpc_server_1 = require("../../infrastructure/grpc/server/user-grpc-server");
var createGrpcApp = function (userService, port) {
    var grpcServer = new user_grpc_server_1.UserGrpcServer(userService);
    grpcServer.start(port);
};
exports.createGrpcApp = createGrpcApp;
