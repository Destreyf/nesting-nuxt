import { Module } from '@nestjs/common';
import { UserController } from "./user.controller";
import { UserService } from "./utils";

@Module({
  components: [UserService],
  controllers: [UserController],
})
export class UserModule { }
