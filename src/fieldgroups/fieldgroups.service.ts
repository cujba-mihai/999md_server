import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  FormField,
  FormFieldDocument,
} from '../formfields/entity/formfield.entity';
import { GetFieldGroupDTO } from './dto/get-fieldgroup.dto';
import { FieldGroups, FieldGroupsDocuments } from './entity/fieldgroups.entity';

@Injectable()
export class FieldgroupsService {
  constructor(
    @InjectModel(FieldGroups.name)
    private fieldGroupsModel: Model<FieldGroupsDocuments>,
    @InjectModel(FormField.name)
    private formFieldModel: Model<FormFieldDocument>,
  ) {}

  async getFieldGroup(id: GetFieldGroupDTO) {
    return this.fieldGroupsModel.findById(id).populate('fields').exec();
  }

  async getAllFieldGroups() {
    return await this.fieldGroupsModel.find().populate('fields').exec();
  }

  async removeAllFieldGroups() {
    try {
      await this.fieldGroupsModel.deleteMany({});
      return true;
    } catch (error) {
      return false;
    }
  }
}
