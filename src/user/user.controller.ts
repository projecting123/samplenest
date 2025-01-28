import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
    constructor(private readonly user: UserService){}

    @Get('/getuser')
    async getUser(@Query('email') email: string){
        return await this.user.getUserByEmail(email);
    }

    @Post('/signup')
    async signup(){
        
    }
}
