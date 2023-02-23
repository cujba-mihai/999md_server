# @999md-clone/packages

The packages module is a collection of packages that are used across the entire 999md project. This module includes a variety of packages that provide different functionality, such as frontend and backend shared schemas, utility functions, and more.

## Included Packages

### yup-schemas

This package contains frontend and backend shared schemas for the 999md project. The schemas provided by this package are used to validate input data and ensure consistency between the frontend and backend.

To use the shared validation schemas in your code, you can import them from the package:

_JavaScript_

```
import { loginSchema } from '@999md-clone/packages/yup-schemas';

// Use the schema to validate form data
const isValid = await loginSchema.isValid(data);
```

## Contributing

We welcome contributions to the `packages` module! If you find a bug or would like to contribute a new feature, please open an issue or submit a pull request on the GitHub repository. To get started, clone the repository and run `npm install` to install the necessary dependencies. Then, you can make changes to the individual packages in the `packages` directory and test your changes using the provided scripts.

## License

The packages module is licensed under the UNLICENSED license. See the LICENSE file for more information.
