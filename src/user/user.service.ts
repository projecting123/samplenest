import { Injectable } from '@nestjs/common';
import { UserDBService } from 'src/schema/user.db.service';

@Injectable()
export class UserService {
    constructor(private readonly userDB: UserDBService) {
    }

    async getUserByEmail(email: string) {
        return await this.userDB.getUserByEmail(email);
    }

    async signup(newUser) {

    }
}
