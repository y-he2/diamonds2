import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Res,
  HttpStatus,
  HttpException,
  NotFoundException,
  ConflictException,
  HttpCode,
} from "@nestjs/common";
import { ApiUseTags, ApiResponse } from "@nestjs/swagger";
import { BotDto } from "../../models/bot.dto";
import { BotRegistrationDto } from "../../models/bot-registration.dto";
import { BotsService } from "../../services/bots.service";
import { IBot } from "../../interfaces/bot.interface";

@ApiUseTags("Bots")
@Controller("api/bots")
export class BotsController {
  constructor(private botService: BotsService) {}
  @ApiResponse({
    status: 200,
    description: "The bot is successfully created.",
  })
  @ApiResponse({
    status: 409,
    description: "The bot already exists.",
  })
  @HttpCode(200)
  @Post()
  async create(@Body() botRegistration: BotRegistrationDto): Promise<IBot> {
    return await this.botService.add(botRegistration);
  }

  @ApiResponse({
    status: 200,
    description: "Returns bot",
    type: BotDto,
  })
  @ApiResponse({
    status: 404,
    description: "Bot not found",
  })
  @Get(":token")
  async findAll(@Param("token") token: string): Promise<IBot> {
    return await this.botService.get(token);
  }
}
