import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FormFields } from './entity/formfields.entity';
import { defaultFields } from 'src/constants';

@Injectable()
export class FormfieldsService {
  constructor(
    @InjectModel(FormFields.name) private formFieldsModel: Model<FormFields>,
  ) {}

  async findAll() {
    return await this.formFieldsModel.find().exec();
  }

  async addDefaultFields() {
    return await Promise.all(
      defaultFields.map(async (field) => {
        const existingField = await this.formFieldsModel
          .findOne({ name: field.name })
          .exec();

        if (!existingField) {
          return await this.formFieldsModel.create(field);
        }

        return Promise.resolve();
      }),
    );
  }
}
