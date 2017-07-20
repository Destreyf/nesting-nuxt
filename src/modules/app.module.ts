import { Module } from '@nestjs/common';
import { UserModule } from "./UserModule/user.module";

@Module({
    modules: [UserModule],
})
export class ApplicationModule { }
