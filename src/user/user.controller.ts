import { Controller, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Post('login')
  login(){
    return 'login'
  }

  @Post('logout')
  logout(){
    return 'logout'
  }
}
