import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { isAuthorized } from 'src/middleware';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(isAuthorized)
      .exclude(
        { path: 'signup', method: RequestMethod.POST },
        { path: 'login', method: RequestMethod.POST },
      )
      .forRoutes(UserController);
  }
}
