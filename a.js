let str =
  "string,oneOf[30,40],required['Provide a value'],min[0],max[500],required,somethingElse[20,50]";
const regex = /,?(?<validation>\w+)(?:\[(?<params>.+)\])?/;
const validations = [];
let match;
const maxIterations = 20;
let iterations = 0;
const validTypes = [
  'string',
  'number',
  'boolean',
  'date',
  'array',
  'tuple',
  'object',
];
while ((match = regex.exec(str)) !== null) {
  if (iterations === 0 && !validTypes.includes(match.groups.validation))
    throw Error('Invalid yup type provided');
  if (maxIterations === iterations) break;
  let { params } = match.groups;
  const { validation } = match.groups;
  params = params?.split(']')?.[0];

  validations.push({
    validation,
    params,
  });

  const replaceReg = new RegExp(
    `,?${validation}${params ? `\\[${params}\\]` : ''}`,
  );

  console.log(replaceReg);

  str = str.replace(replaceReg, '');
  console.log(str);

  iterations += 1;
}

console.log(validations);
