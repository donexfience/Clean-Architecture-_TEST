import dotenv from "dotenv";
import { createExpressApp } from "./http/express-app";
import { connectDb } from "./config/database-config";
import { createGrpcApp } from "./grpc/grpc-app";
import { MongoDBUserRepository } from "../infrastructure/database/repositories/user-repository-interface";
import { UserService } from "../application/services/user-service";
dotenv.config();
const startServer = async () => {
  await connectDb();
  const userRepository = new MongoDBUserRepository();
  const userService = new UserService(userRepository);
  const app = createExpressApp(userService);
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`main HTTP server running at http://localhost:${port}`);
  });
  const grpcPort = process.env.GRPC_PORT || "50051";
  createGrpcApp(userService, grpcPort);
};
startServer().catch(console.error);
