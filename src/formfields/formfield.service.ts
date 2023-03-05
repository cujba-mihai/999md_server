import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FormField } from './entity/formfield.entity';

@Injectable()
export class FormfieldService {
  constructor(
    @InjectModel(FormField.name) private formFieldModel: Model<FormField>,
  ) {}

  async findAll() {
    return await this.formFieldModel.find().exec();
  }

  async removeAllFields(): Promise<boolean> {
    try {
      await this.formFieldModel.deleteMany({}).exec();

      return true;
    } catch (err) {
      return false;
    }
  }

}
