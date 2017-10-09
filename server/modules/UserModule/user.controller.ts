
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Req, Res } from '@nestjs/common';
import { Response } from "express";
import { IUser, UserService } from "./utils";

@Controller('api/users')
export class UserController {
  constructor(private $service: UserService) {
    /**
     * this is just a dummy user service
     */
    this.$service.find().then(users => console.log('Actual Users', users))
      .catch(console.error);
  }

  @Post()
  public async create( @Res() res: Response, @Body('user') user: IUser) {
    const createdUser = await this.$service.create(user);
    res.status(HttpStatus.CREATED).json(createdUser)
  }

  @Get()
  public async find( @Req() req, @Res() res: Response) {
    const users = await this.$service.find();
    res.status(HttpStatus.OK).json(users);
  }

  @Get('/:id')
  public async findOne( @Req() req, @Res() res: Response, @Param('id') id) {
    id = parseInt(id, 10) || id.toLowerCase();
    const user = await this.$service.findOne(id);
    res.status(HttpStatus.OK).json(user);
  }

  @Put('/:id')
  public async update( @Req() req, @Res() res: Response, @Body('user') user: IUser, @Param('id') id) {
    const updatedUser = await this.$service.update(id, user);
    res.status(HttpStatus.OK).json(updatedUser)
  }

  @Delete('/:id')
  public async deleteEmployee( @Req() req, @Res() res: Response, @Param('id') id) {
    const deletedEmployee = await this.$service.destroy(id);
    res.status(HttpStatus.OK).json(deletedEmployee);
  }
}
