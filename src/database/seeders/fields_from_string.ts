import fields from '~server/constants/fields';

export default async function () {
  await Promise.all(
    mappedFields.map(async (field) => {
      await this.formFieldService.createFieldFromString(field);
    }),
  );
}

const mappedFields = fields
  .split('\n')
  .slice(1)
  .map((field, index, array) => {
    if (index % 2 === 0) {
      return {
        label: field.trim(),
        stringSchema: array[index + 1].trim(),
      };
    }
  })
  .filter(Boolean);

console.log('MAPPED FIELDS: ', mappedFields);
