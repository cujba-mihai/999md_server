import * as Yup from 'yup';
export declare const usernameSchema: Yup.StringSchema<
  string,
  Yup.AnyObject,
  undefined,
  ''
>;
export declare const emailSchema: Yup.StringSchema<
  string,
  Yup.AnyObject,
  undefined,
  ''
>;
export declare const passwordSchema: Yup.StringSchema<
  string,
  Yup.AnyObject,
  undefined,
  ''
>;
export declare const confirmPasswordSchema: Yup.StringSchema<
  string,
  Yup.AnyObject,
  undefined,
  ''
>;
export declare const agreeWithTermsSchema: Yup.BooleanSchema<
  boolean,
  Yup.AnyObject,
  undefined,
  ''
>;
export declare const SignUpFormValidation: Yup.ObjectSchema<
  {
    username: string;
    email: string;
    password: string;
    password2: string;
    agreeWithTerms: boolean;
  },
  Yup.AnyObject,
  {
    username: undefined;
    email: undefined;
    password: undefined;
    password2: undefined;
    agreeWithTerms: undefined;
  },
  ''
>;
export declare const LogInFormValidation: Yup.ObjectSchema<
  {
    username: string;
    password: string;
  },
  Yup.AnyObject,
  {
    username: undefined;
    password: undefined;
  },
  ''
>;
//# sourceMappingURL=index.d.ts.map
