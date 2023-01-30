import { CreateSubcategoriesInput } from 'src/subcategories/dto/create-subcategories.input';
import { subcategories, categories } from './categories';

let currentMainCategory = '';

/**
 * @function takes a string and returns the main category with its subcategories as an array of strings
 */
const stringToCamelCase = (string: string) =>
  string
    .split(' ')
    .map((word, index) => {
      word = word.replace(/\s+/, '');
      if (index === 0) return word.trim().toLowerCase();

      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');

/**
 * @param category
 * @returns {Object} the main category with its subcategories as an array of strings
 */
export const getSubcategories = (
  category: string,
): CreateSubcategoriesInput[] => {
  const subcats = subcategories?.[category]?.split('\n');

  if (!subcats) throw new Error('No subcategories found');

  return subcategories?.[category]
    ?.split('\n')
    .filter(Boolean)
    .reduce(
      (
        acc: {
          [x: string]: {
            name: string;
            parentCategory: string;
            subcategories: any[];
          };
        },
        curr: string,
      ) => {
        const isSubCategory = curr.startsWith(' ');

        if (isSubCategory) {
          acc[currentMainCategory].subcategories.push({
            name: stringToCamelCase(curr.replace(/^\s+|[,.]/g, '')), // replace spaces with commas,
            parentCategory: category,
            subcategories: [],
          });
        } else {
          currentMainCategory = stringToCamelCase(
            curr.replace(/^\s+|[,.']/g, ''),
          );
          acc[currentMainCategory] = {
            name: currentMainCategory,
            parentCategory: category,
            subcategories: [],
          };
        }

        return acc;
      },
      {},
    );
};

const categoriesWithSubcategories = categories.map((category) => {
  const subcategories = getSubcategories(category);

  return {
    name: category,
    subcategories,
  };
});

export default categoriesWithSubcategories;
