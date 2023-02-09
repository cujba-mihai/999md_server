import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { BrandModelsService } from './brand-models.service';
import { BrandModels } from './entity/brand-models.entity';

@Resolver()
export class BrandModelsResolver {
  constructor(private readonly brandModelsService: BrandModelsService) {}

  @Query(() => [BrandModels])
  findAllBrandModels() {
    return this.brandModelsService.findAllBrandModels();
  }

  @Mutation(() => Boolean)
  removeAllBrandModels() {
    return this.brandModelsService.removeAllBrandModels();
  }
}
