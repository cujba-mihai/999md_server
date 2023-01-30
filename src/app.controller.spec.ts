import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Link to graphQL playground"', () => {
      expect(appController.getPlaygroundURL()).toBe(
        'Hi, for the API playground please follow to <a href="http://localhost:3000/graphql">GraphQL Playground</a>.',
      );
    });
  });
});
