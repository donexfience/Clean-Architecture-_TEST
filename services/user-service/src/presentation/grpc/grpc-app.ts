import { UserService } from "../../application/services/user-service";
import { UserGrpcServer } from "../../infrastructure/grpc/server/user-grpc-server";
export const createGrpcApp = (userService: UserService, port: string) => {
    const grpcServer = new UserGrpcServer(userService);
    grpcServer.start(port)
};
