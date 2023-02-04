import { Resolver } from '@nestjs/graphql';
import { LocationsService } from './locations.service';

@Resolver()
export class LocationsResolver {
  constructor(private readonly locationsService: LocationsService) {}
}
