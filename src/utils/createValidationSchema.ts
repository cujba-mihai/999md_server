import log from './log';

/* eslint-disable @typescript-eslint/no-var-requires */
const validTypes = [
  'string',
  'number',
  'boolean',
  'date',
  'array',
  'tuple',
  'object',
];

const extractValidationsFromString = (str) => {
  const regex = /,?(?<validation>\w+)(?:\[(?<params>.+)\])?/;
  const validations = [];
  let match;
  const maxIterations = 20;
  let iterations = 0;

  while ((match = regex.exec(str)) !== null) {
    str = str.replace(/\s(?![^\[]*\])/g, '');

    if (iterations === 0 && !validTypes.includes(match.groups.validation))
      throw Error('Invalid yup type provided');
    if (maxIterations === iterations) break;
    let { params } = match.groups;
    const { validation } = match.groups;
    params = params?.split(']')?.[0];
    params = params?.split(',');
    params = params?.length === 0 ? params[0] : params;
    validations.push({
      validation,
      params,
    });

    const replaceReg = new RegExp(
      `,?${validation}${params ? `\\[${params}\\]` : ''}`,
    );

    str = str.replace(replaceReg, '');

    iterations += 1;
  }

  log('Validations extracted from string: ', validations);

  return validations;
};

/**
 * Takes a string (e.g. 'string,required,oneOf["user","admin"]')
 * and convers it to a yup validation schema (string().require().oneOf(["user", "admin"]))
 * @param formatString
 * @returns a Yup validation schema
 */
const test = { schema: '' };
const createValidationSchema = (formatString: string) => {
  const yup = require('yup');
  console.log(formatString);
  const formatArray = extractValidationsFromString(formatString);
  const { validation: type = 'string' } = formatArray?.[0] || {};
  const methods = formatArray.slice(1);

  test.schema = yup.string().required();

  let schema = yup[type]();

  methods.forEach(({ validation, params }) => {
    schema = schema[validation](params);
  });

  return { schema, type, validations: methods };
};

export default createValidationSchema;
