import { Resolver } from '@nestjs/graphql';
import { RegionDTO } from './dto/region.dto';
import { RegionService } from './region.service';

@Resolver(() => RegionDTO)
export class RegionResolver {
  constructor(private readonly regionService: RegionService) {}
}
