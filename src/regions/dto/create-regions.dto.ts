import { Field, InputType } from '@nestjs/graphql';
import { CreateRegionDTO } from './create-region.dto';

@InputType()
export class CreateRegionsDTO {
  @Field(() => [CreateRegionDTO])
  regions: CreateRegionDTO[];
}
