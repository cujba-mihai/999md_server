// import yupToJsonSchema from '@sodaru/yup-to-json-schema';
// import { async } from 'rxjs';
// import { CreateFieldFromStringDTO } from '~server/src/graphql';
// import createValidationSchema from '~server/src/utils/createValidationSchema';
// import fields from '../../../constants/fields';

// export default async function () {
//   async function createFieldFromString({
//     stringSchema,
//     label,
//   }: CreateFieldFromStringDTO) {
//     const validationSchema = createValidationSchema(stringSchema);

//     const schema = yupToJsonSchema(validationSchema.schema);

//     const createdField = await this.formFieldModel.create({
//       validationSchema: schema,
//       label,
//       type: validationSchema.type,
//     });

//     return createdField;
//   }

//   await Promise.all(
//     mappedFields.map(async (field) => {
//       await createFieldFromString(field);
//     }),
//   );
// }

// const mappedFields = fields
//   .split('\n')
//   .slice(1)
//   .map((field, index, array) => {
//     if (index % 2 === 0) {
//       return {
//         label: field.trim(),
//         stringSchema: array[index + 1].trim(),
//       };
//     }
//   })
//   .filter(Boolean);

// export async function unseed() {
//   return this;
// }
