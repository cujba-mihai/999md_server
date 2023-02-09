import { CreateFieldFromStringDTO } from '~server/src/formfields/dto/create-field-from-string.dto';
import getBlueprint from '~server/src/utils/getBlueprint';

const basefields = getBlueprint('basefields').split('\n');
const compoundfields = getBlueprint('compoundfields').split('\n');

export default async function () {
  await Promise.all(
    mappedBaseFields.map(async (field: CreateFieldFromStringDTO) => {
      return await this.formFieldModel.create(field);
    }),
  );

  await Promise.all(
    mappedCompoundFields.map(async (field: CreateFieldFromStringDTO) => {
      return await this.formFieldModel.create(field);
    }),
  );
}

const mappedBaseFields = basefields
  .map((field, index, array) => {
    if (index % 2 === 0) {
      return {
        type: field.trim(),
        label: field.trim(),
        validationString: array[index + 1].trim(),
      };
    }
  })
  .filter(Boolean);

// Compound fields
// consisting of other base fields
const compoundfieldsIteration = Array(compoundfields.length / 3);
const mappedCompoundFields = [];

for (let i = 0; i < compoundfieldsIteration.length; i++) {
  const fields = compoundfields.slice(i * 3, i * 3 + 3);

  mappedCompoundFields.push({
    label: fields[0].trim(),
    type: fields[1].trim(),
    validationString: fields[2].trim(),
  });
}

export async function unseed() {
  return this;
}
