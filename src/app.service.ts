import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPlaygroundURL(): string {
    return `
    Hi, for the API playground please follow to <a href="/graphql">GraphQL Playground</a>.
    `;
  }
}
