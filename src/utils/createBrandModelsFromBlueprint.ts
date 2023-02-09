import { BrandModels } from '../brand-models/entity/brand-models.entity';
import getBlueprint from './getBlueprint';

async function creteBrandModelsFromBlueprint(
  subcategoryName: string,
  bluePrint: string,
) {
  if (!(this instanceof BrandModels))
    throw new Error(
      'This class should be called only on BrandModels (e.g. creteBrandModelsFromBlueprint.call(this.brandModel, subcategoryName, bluePrint))',
    );

  const carBrandsModels = getBlueprint(bluePrint).split('\n');

  const subcategory = await this.subcategoryModel.findOne({
    name: subcategoryName,
  });

  let currentFormField = {
    subcategoryName: subcategory.name,
    brand: '',
    models: [],
  };

  const carBrandsWithModels = carBrandsModels.reduce(
    (acc, line, index, array) => {
      // check if the current line is a form field label
      if (!line.startsWith(' ')) {
        currentFormField = {
          ...currentFormField,
          brand: line.trim(),
          models: [],
        };
      } else {
        currentFormField.models.push(line.trim());
      }

      const nextIsField = array?.[index + 1]?.startsWith(' ');

      if (!nextIsField || nextIsField == undefined) {
        acc.push(currentFormField);
      }

      return acc;
    },
    [],
  );

  await Promise.all(
    carBrandsWithModels.map(async (brandModel) => {
      return await this.brandModel.create(brandModel);
    }),
  );
}

export default creteBrandModelsFromBlueprint;
