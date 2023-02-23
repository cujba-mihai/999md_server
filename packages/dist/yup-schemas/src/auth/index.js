'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.LogInFormValidation =
  exports.SignUpFormValidation =
  exports.agreeWithTermsSchema =
  exports.confirmPasswordSchema =
  exports.passwordSchema =
  exports.emailSchema =
  exports.usernameSchema =
    void 0;
const Yup = require('yup');
exports.usernameSchema = Yup.string().required('Username is required');
exports.emailSchema = Yup.string().email().required('Email is required');
exports.passwordSchema = Yup.string()
  .min(8, 'Password must be at least 8 characters')
  .required('Password is required');
exports.confirmPasswordSchema = Yup.string()
  .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
  .required('You must confirm your password');
exports.agreeWithTermsSchema = Yup.bool().oneOf(
  [true],
  'Must agree with terms and conditions',
);
exports.SignUpFormValidation = Yup.object().shape({
  username: exports.usernameSchema,
  email: exports.emailSchema,
  password: exports.passwordSchema,
  password2: exports.confirmPasswordSchema,
  agreeWithTerms: exports.agreeWithTermsSchema,
});
exports.LogInFormValidation = Yup.object().shape({
  username: exports.usernameSchema,
  password: exports.passwordSchema,
});
//# sourceMappingURL=index.js.map
