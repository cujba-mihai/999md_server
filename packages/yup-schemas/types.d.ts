import * as Yup from 'yup';

export declare interface ISignUpFormValues {
  username: string;
  email: string;
  password: string;
  password2: string;
  agreeWithTerms: boolean;
}

export declare interface ILogInFormValues {
  username: string;
  password: string;
}

export type UsernameSchemaType = Yup.StringSchema<object>;
export type EmailSchemaType = Yup.StringSchema<object>;
export type PasswordSchemaType = Yup.StringSchema<object>;
export type ConfirmPasswordSchemaType = Yup.StringSchema<object>;
export type AgreeWithTermsSchemaType = Yup.BooleanSchema<object>;

export const usernameSchema: UsernameSchemaType;
export const emailSchema: EmailSchemaType;
export const passwordSchema: PasswordSchemaType;
export const confirmPasswordSchema: ConfirmPasswordSchemaType;
export const agreeWithTermsSchema: AgreeWithTermsSchemaType;

export const SignUpFormValidation: Yup.ObjectSchema<object>;
export const LogInFormValidation: Yup.ObjectSchema<object>;
