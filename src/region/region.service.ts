/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  InjectQueryService,
  QueryService,
  RelationQueryService,
} from '@ptc-org/nestjs-query-core';
import { Location } from '../location/entity/location.entity';
import { Region } from './entity/region.entity';

export class RegionService extends RelationQueryService<Region> {
  constructor(
    @InjectQueryService(Region) queryService: QueryService<Region>,
    @InjectQueryService(Location) locationQueryService: QueryService<Location>,
  ) {
    super(queryService, {
      // REF: https://tripss.github.io/nestjs-query/docs/concepts/services/#relationqueryservice
      // allLocations: {
      //   service: locationQueryService,
      //   query(region) {
      //     // filter for all relations that belong to the todoItem and are completed
      //     return { filter: { regionId: { eq: region.id } } };
      //   },
      // },
    });
  }
}
