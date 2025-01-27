import { Controller, Get, Param } from '@nestjs/common';
import { UserDBService } from 'src/schema/user.db.service';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly user: UserService){}
    @Get()
    index(){
        return 'Entry path of user api endpoint';
    }

    @Get('/getuser:email')
    async getUser(@Param('email') email: string){
        return await this.user.getUserByEmail(email);
    }
}
