
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { UserService } from '../../../application/services/user-service';
import path from 'path';
const PROTO_PATH = path.resolve(__dirname,'./proto/user.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const userProto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType