import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScreenServiceBase } from "./base/screen.service.base";

@Injectable()
export class ScreenService extends ScreenServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
