import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '@app/users/controllers/users.controller';
import { UsersService } from '@app/users/services/users.service';

describe('UsersController', () => {
  let userController: UsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    userController = app.get<UsersController>(UsersController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userController.index()).toBe('Hello World!');
    });
  });
});
