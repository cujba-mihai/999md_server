# @999md-clone/yup-schemas

This package provides shared Yup validation schemas for use in both frontend and backend projects in the 999md project.
Installation

To use this package in your project, you can install it from a private registry, such as npm. You will also need to install the yup package, which is a peer dependency.

_Terminal_

`npm install --save @999md-clone/yup-schemas`

### Usage

To use the shared validation schemas in your code, you can import them from the package:

_JavaScript_

```
import { loginSchema } from '@999md-clone/packages/yup-schemas';

// Use the schema to validate form data
const isValid = await loginSchema.isValid(data);
```

The package includes several validation schemas that you can use to validate form data.
Contributing

Contributions are welcome! If you would like to contribute to this package, please follow these steps:

1. Fork the repository and create a new branch for your changes.
1. Make your changes and write tests to cover your changes.
1. Run npm run test to ensure that all tests pass.
1. Commit your changes and create a pull request.

### License

This package is licensed under the ISC License. See the LICENSE file for details.

### Credits

This package was created by Cujba Mihai.
