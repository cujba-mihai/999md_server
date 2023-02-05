import yup from 'yup';

const createValidationSchema = (formatString) => {
  const formatArray = formatString.split(',');
  const type = formatArray[0];
  const validations = formatArray.slice(1);
  let schema = yup[type]();

  if (validations.includes('required')) {
    schema = schema.required();
  }

  const oneOfIndex = validations.indexOf('oneOf');
  if (oneOfIndex !== -1) {
    const allowedValues = JSON.parse(validations[oneOfIndex + 1]);
    schema = schema.oneOf(allowedValues);
  }

  const maxIndex = validations.indexOf('max');
  if (maxIndex !== -1) {
    const maxValue = parseInt(validations[maxIndex + 1].replace(/\[|\]/g, ''));
    schema = schema.max(maxValue);
  }

  const minIndex = validations.indexOf('min');
  if (minIndex !== -1) {
    const minValue = parseInt(validations[minIndex + 1].replace(/\[|\]/g, ''));
    schema = schema.min(minValue);
  }

  return schema;
};

const validationFormatString = 'string,required,oneOf["user","admin"]';

const validationSchema = createValidationSchema(validationFormatString);
