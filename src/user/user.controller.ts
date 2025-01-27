import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api')
export class UserController {
    constructor(private readonly user: UserService){}
    @Get('/user')
    index(){
        return 'Entry path of user api endpoint';
    }

    @Get('/getuser/:email')
    async getUser(@Param('email') email: string){
        return await this.user.getUserByEmail(email);
    }
}
