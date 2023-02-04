import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FormField } from './entity/formfield.entity';
import { defaultFields } from 'src/constants';

@Injectable()
export class FormfieldService {
  constructor(
    @InjectModel(FormField.name) private formFieldModel: Model<FormField>,
  ) {}

  async findAll() {
    return await this.formFieldModel.find().exec();
  }

  async addDefaultFields() {
    return await Promise.all(
      defaultFields.map(async (field) => {
        const existingField = await this.formFieldModel
          .findOne({ name: field.label })
          .exec();

        if (!existingField) {
          return await this.formFieldModel.create(field);
        }

        return Promise.resolve();
      }),
    );
  }
}
