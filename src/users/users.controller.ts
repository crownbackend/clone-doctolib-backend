import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
//import { Roles } from './decorator/roles.decorator';
//import { RolesGuard } from './guard/roles.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }
  @Post('register/doctor')
  async registerDoctor(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createDoctor(createUserDto);
  }

  @Get('/all')
  async findAll() {
    return await this.usersService.findAll();
  }
}
