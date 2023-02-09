import { CreateFieldGropDTO } from '~server/src/fieldgroups/dto/create-fieldgroup.dto';
import { FormField } from '~server/src/formfields/entity/formfield.entity';
import getBlueprint from '~server/src/utils/getBlueprint';

const defaultFormFields = getBlueprint('fieldgroups').split('\n');

export default async function seed() {
  let currentFormField = {
    name: '',
    canBeToggled: false,
    fields: [],
  };

  const fields = defaultFormFields.filter((field) => field.startsWith(' '));

  const allFields = await Promise.all(
    fields
      .map((f) => f.trim())
      .map(async (label) => {
        const existingFormField = await this.formFieldModel.findOne({ label });

        if (existingFormField) return existingFormField;

        return await this.formFieldModel.create({
          label,
          validationString: 'string',
          type: 'string',
        });
      }),
  );

  const formFields = defaultFormFields.reduce((acc, line, index) => {
    // check if the current line is a form field label
    if (!line.startsWith(' ')) {
      const toggleableFields = ['characteristics', 'additionalOptions'];

      currentFormField = {
        name: line,
        canBeToggled: toggleableFields.includes(line),
        fields: [],
      };
    } else {
      const fieldEl = allFields.find(
        (field: FormField) => field.label === line.trim(),
      )?._id;
      fieldEl && currentFormField.fields.push(fieldEl);
    }

    const nextIsField = defaultFormFields?.[index + 1]?.startsWith(' ');

    if (!nextIsField || nextIsField == undefined) {
      acc.push(currentFormField);
    }

    return acc;
  }, []);

  return await Promise.all(
    formFields.map(
      async (fieldGroup: CreateFieldGropDTO) =>
        await this.createFormGroup(fieldGroup),
    ),
  );
}

export async function unseed() {
  return this;
}
