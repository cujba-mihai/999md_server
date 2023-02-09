import { CreateFieldFromStringDTO } from '~server/src/formfields/dto/create-field-from-string.dto';
import getBlueprint from '~server/src/utils/getBlueprint';

const compoundfields = getBlueprint('carCharacteristics').split('\n');
const compoundfieldsIteration = Array(compoundfields.length / 4);
const mappedCompoundFields = [];

for (let i = 0; i < compoundfieldsIteration.length; i++) {
  const fields = compoundfields.slice(i * 4, i * 4 + 4);

  const label = fields[0].trim();
  const type = fields[1].trim();
  const validationString = fields[2].trim();

  const optionsString = fields[3].trim();
  const options = optionsString === 'none' ? [] : optionsString.split(',');

  console.log(options);

  mappedCompoundFields.push({
    label,
    type,
    validationString,
    options,
  });
}

export default async function seed() {
  const fields = await Promise.all(
    mappedCompoundFields.map(async (field: CreateFieldFromStringDTO) => {
      return await this.formFieldModel.create(field);
    }),
  );

  const fieldGroup = {
    name: 'characteristics_cars',
    canBeToggled: true,
    fields,
  };

  const carsCharacteristics = await this.fieldGroupsModel.create(fieldGroup);

  return carsCharacteristics;
}

export async function unseed() {
  return this;
}
