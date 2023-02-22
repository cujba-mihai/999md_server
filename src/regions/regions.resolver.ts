import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRegionDTO } from './dto/create-region.dto';
import { CreateRegionsDTO } from './dto/create-regions.dto';
import { FindRegionDTO } from './dto/find-region.dto';
import { Regions } from './entity/regions.entity';
import { RegionsService } from './regions.service';

@Resolver()
export class RegionsResolver {
  constructor(private readonly regionsService: RegionsService) {}

  @Query(() => Regions, { name: 'findRegion' })
  findRegion(region: FindRegionDTO) {
    return this.regionsService.findRegion(region);
  }

  @Query(() => [Regions])
  findRegions() {
    return this.regionsService.findAll();
  }

  @Mutation(() => Boolean)
  removeAllRegions() {
    return this.regionsService.removeAllRegions();
  }

  @Mutation(() => Regions)
  createRegionWithLocations(regionDTO: CreateRegionDTO) {
    return this.regionsService.createRegionWithLocations(regionDTO);
  }

  @Mutation(() => [Regions])
  createRegionsWithLocations(regionsDTO: CreateRegionsDTO) {
    return this.createRegionsWithLocations(regionsDTO);
  }
}
