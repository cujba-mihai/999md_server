import creteBrandModelsFromBlueprint from '~server/src/utils/createBrandModelsFromBlueprint';

export default async function seed() {
  return await creteBrandModelsFromBlueprint.call(this, 'cars', 'cardBrands');
}

export async function unseed() {
  return this;
}
