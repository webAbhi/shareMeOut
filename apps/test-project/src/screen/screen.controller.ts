import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ScreenService } from "./screen.service";
import { ScreenControllerBase } from "./base/screen.controller.base";

@swagger.ApiTags("screens")
@common.Controller("screens")
export class ScreenController extends ScreenControllerBase {
  constructor(
    protected readonly service: ScreenService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
