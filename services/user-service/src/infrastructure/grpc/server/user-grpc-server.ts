import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { UserService } from "../../../application/services/user-service";
import path from "path";
import { ProtoGrpcType } from "../../../generated/user";


const PROTO_PATH = path.resolve(__dirname, "../proto/user.proto");
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const userProto = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;
export class UserGrpcServer {
  private server: grpc.Server;
  constructor(private userService: UserService) {
    this.server = new grpc.Server();
    this.server.addService(userProto.user.UserService.service, {
      createUser: this.createUser.bind(this),
    });
  }
  private async createUser(
    call: grpc.ServerUnaryCall<any, any>,
    callback: grpc.sendUnaryData<any>
  ): Promise<void> {
    try {
      const user = await this.userService.createUser(call.request);
      callback(null, user);
    } catch (error) {
      if (error instanceof Error) {
        callback(
          {
            code: grpc.status.INTERNAL,
            message: error.message,
          },
          null
        );
      } else {
        callback(
          {
            code: grpc.status.INTERNAL,
            message: "An unknown error occurred",
          },
          null
        );
      }
    }
  }
  start(port: string): void {
    this.server.bindAsync(
      `0.0.0.0:${port}`,
      grpc.ServerCredentials.createInsecure(),
      (err, port) => {
        if (err) {
          console.error("Failed to bind gRPC server", err);
          return;
        }
        console.log(`gRPC server running at http://0.0.0.0:${port}`);
      }
    );
  }
}
