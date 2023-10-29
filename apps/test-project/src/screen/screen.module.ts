import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ScreenModuleBase } from "./base/screen.module.base";
import { ScreenService } from "./screen.service";
import { ScreenController } from "./screen.controller";

@Module({
  imports: [ScreenModuleBase, forwardRef(() => AuthModule)],
  controllers: [ScreenController],
  providers: [ScreenService],
  exports: [ScreenService],
})
export class ScreenModule {}
