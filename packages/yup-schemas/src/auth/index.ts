import * as Yup from 'yup';

export const usernameSchema = Yup.string().required('Username is required');

export const emailSchema = Yup.string().email().required('Email is required');

export const passwordSchema = Yup.string()
  .min(8, 'Password must be at least 8 characters')
  .required('Password is required');

export const confirmPasswordSchema = Yup.string()
  .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
  .required('You must confirm your password');

export const agreeWithTermsSchema = Yup.bool().oneOf(
  [true],
  'Must agree with terms and conditions',
);

export const SignUpFormValidation = Yup.object().shape({
  username: usernameSchema,
  email: emailSchema,
  password: passwordSchema,
  password2: confirmPasswordSchema,
  agreeWithTerms: agreeWithTermsSchema,
});

export const LogInFormValidation = Yup.object().shape({
  username: usernameSchema,
  password: passwordSchema,
});
