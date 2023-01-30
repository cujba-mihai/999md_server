import { categories as defaultCategories } from 'constants/categories';
import { getSubcategories } from 'constants/defaultCategoriesWSubcategories';

export default async function seedCategoriesWSubcategories() {
  const categories = await this.categoriesService.createMany({
    categoriesToAdd: defaultCategories,
  });

  await Promise.all(
    categories.map(async (category) => {
      const categoryName = category.name;
      const [SUBCATS] = Object.entries(getSubcategories(categoryName));
      const [SUBCAT_NAME, SUBCATEGORY] = SUBCATS;

      const createdSubCategories =
        await this.subcategoriesService.createSubcategories(
          SUBCATEGORY.parentCategory,
          SUBCATEGORY.subcategories,
          SUBCAT_NAME,
        );

      category.subcategories.push(createdSubCategories);

      await category.save();
    }),
  );
}
