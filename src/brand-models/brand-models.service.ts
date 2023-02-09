import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Subcategory,
  SubcategoryDocument,
} from '../subcategories/entities/subcategory.entity';
import { BrandModels, BrandModelsDocument } from './entity/brand-models.entity';

@Injectable()
export class BrandModelsService {
  constructor(
    @InjectModel(BrandModels.name)
    private readonly brandModel: Model<BrandModelsDocument>,
    @InjectModel(Subcategory.name)
    private readonly subcategoryModel: Model<SubcategoryDocument>,
  ) {}

  async removeAllBrandModels() {
    try {
      await this.brandModel.deleteMany({});

      return true;
    } catch (err) {
      return false;
    }
  }

  async findAllBrandModels() {
    return await this.brandModel.find({}).exec();
  }
}
