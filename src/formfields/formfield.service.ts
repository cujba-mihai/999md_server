import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FormField } from './entity/formfield.entity';
import { CreateFieldFromStringDTO } from './dto/create-field-from-string.dto';
import createValidationSchema from '../utils/createValidationSchema';
import yupToJsonSchema from '@sodaru/yup-to-json-schema';

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

  async createFieldFromString({
    stringSchema,
    label,
  }: CreateFieldFromStringDTO) {
    const validationSchema = createValidationSchema(stringSchema);

    const schema = yupToJsonSchema(validationSchema.schema);

    const createdField = await this.formFieldModel.create({
      validationSchema: schema,
      label,
      type: validationSchema.type,
    });

    return createdField;
  }
}
