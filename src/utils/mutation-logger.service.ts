import { Logger, LoggerService } from '@nestjs/common';
import {
  DeepPartial,
  ProxyQueryService,
  QueryService,
  Filter,
  DeleteManyResponse,
  DeleteOneOptions,
  UpdateManyResponse,
  UpdateOneOptions,
} from '@ptc-org/nestjs-query-core';

export class MutationLoggerService<
  DTO,
  C = DeepPartial<DTO>,
  U = DeepPartial<DTO>,
> extends ProxyQueryService<DTO, C, U> {
  private readonly logger: LoggerService;

  constructor(label: string, queryService: QueryService<DTO, C, U>) {
    // call super witht the QueryService we will delegate to
    super(queryService);
    // create our logger
    this.logger = new Logger(label);
  }

  // Override all the create, update, and delete methods to add the timed logging functionality
  async(items: C[]): Promise<DTO[]> {
    return this.timedLog(`create many [itemCount=${items.length}]`, () =>
      super.createMany(items),
    );
  }

  createOne(item: C): Promise<DTO> {
    return this.timedLog(`create one`, () => super.createOne(item));
  }

  deleteMany(filter: Filter<DTO>): Promise<DeleteManyResponse> {
    return this.timedLog(`delete many`, () => super.deleteMany(filter));
  }

  deleteOne(id: number | string, opts?: DeleteOneOptions<DTO>): Promise<DTO> {
    return this.timedLog(`delete one [id=${id}]`, () =>
      super.deleteOne(id, opts),
    );
  }

  updateMany(update: U, filter: Filter<DTO>): Promise<UpdateManyResponse> {
    return this.timedLog('update many', () => super.updateMany(update, filter));
  }

  updateOne(
    id: string | number,
    update: U,
    opts?: UpdateOneOptions<DTO>,
  ): Promise<DTO> {
    return this.timedLog(`update one [id=${id}]`, () =>
      super.updateOne(id, update, opts),
    );
  }

  private async timedLog<T>(message, fn: () => Promise<T>): Promise<T> {
    const start = new Date();
    const result = await fn();
    const duration = start.getTime() - new Date().getTime();
    this.logger.log(`${message} [duration=${duration}]`);
    return result;
  }
}
