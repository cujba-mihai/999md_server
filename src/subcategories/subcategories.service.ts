import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSubcategoriesInput } from './dto/create-subcategories.input';
import { Subcategory } from './entities/subcategory.entity';

@Injectable()
export class SubcategoriesService {
  constructor(
    @InjectModel(Subcategory.name) private subcategoryModel: Model<Subcategory>,
  ) {}

  async createSubcategories(subcategories: CreateSubcategoriesInput[]) {
    const result = await Promise.all(
      subcategories.map(async (subcategory) => {
        return await this.subcategoryModel.create({
          name: subcategory.name,
          childSubcategories: await this.subcategoryModel.create(
            subcategory.childSubcategories,
          ),
        });
      }),
    );
    return result;
  }
}
