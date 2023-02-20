import { Resolver } from '@nestjs/graphql';
import { LocationDTO } from './dto/location.dto';
import { LocationService } from './location.service';

@Resolver(() => LocationDTO)
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}
}
