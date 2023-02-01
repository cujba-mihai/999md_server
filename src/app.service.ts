import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPlaygroundURL(): string {
    return `
    Hi, for the API playground please follow to <a href="${
      process.env.SERVER_URL || 'localhost:3000'
    }/graphql">GraphQL Playground</a>.
    `;
  }
}
