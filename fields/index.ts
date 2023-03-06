import * as Yup from 'yup';

type InputTypes =
  | 'email'
  | 'text'
  | 'textarea'
  | 'boolean'
  | 'datetime'
  | 'select'
  | 'multiselect';

export const textInput = Yup.string();
export const textAreaInput = Yup.string();
export const numberInput = Yup.number();
export const booleanInput = Yup.boolean();
export const emailInput = Yup.string().email();
export const dateTimeInput = Yup.date();

export const createSelectInputValidation = <T extends Array<string>>(
  options: T,
) => Yup.array().of(Yup.string().oneOf(options));
export const createMultiSelectInputValidation = <T extends string[]>(
  options: T,
) =>
  Yup.array()
    .of(Yup.string().oneOf(options))
    .min(1, 'Select at least one option');

interface IGetType {
  type: InputTypes;
  options?: Array<string>;
}

const getType = ({ type, options }: IGetType) => {
  switch (type) {
    case 'boolean':
      return booleanInput;
    case 'datetime':
      return dateTimeInput;
    case 'email':
      return emailInput;
    case 'multiselect':
      return createMultiSelectInputValidation(options);
    case 'select':
      return createSelectInputValidation(options);
    case 'textarea':
      return textAreaInput;
    default:
      return textInput;
  }
};

const generateSchemaFromObject = <T extends object>(obj: T) => {
  const keys = Object.keys(obj);

  const shape = keys.reduce((acc, key) => {
    const props = obj[key];
    const typeSchema = getType(props);

    acc[key] = typeSchema;

    return acc;
  }, {});

  const validationSchema = Yup.object().shape(shape);

  return validationSchema;
};

// TODO: CREATE UNIT TESTS
const example = {
  email: {
    type: 'email',
  },
  characteristics: {
    type: 'multiselect',
    options: ['a', 'b', 'c'],
  },
};

const schema = generateSchemaFromObject(example);

const validation = schema.validateSync({
  email: 'asdsad@gmail.com',
  characteristics: ['a'],
});
