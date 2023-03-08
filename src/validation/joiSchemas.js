import joi from "joi";
import { joiPasswordExtendCore } from "joi-password";
const joiPassword = joi.extend(joiPasswordExtendCore);

export const signUpSchema = {
  email: joi.string().email({ tlds: { allow: false } }),
  userName: joi.string().min(5),
  password: joiPassword
    .string()
    .min(8)
    .minOfUppercase(1)
    .minOfLowercase(1)
    .minOfNumeric(1)
    .minOfSpecialCharacters(1)
    .noWhiteSpaces(),
  confirmPassword: joi.ref("password"),
};

export const logInSchema = {
  userName: joi.string().min(5),
  password: joi.string().min(8),
};

export const updateUserSchema = {
  email: joi.string().email({ tlds: { allow: false } }),
  userName: joi.string().min(5),
  password: joiPassword
    .string()
    .min(8)
    .minOfUppercase(1)
    .minOfLowercase(1)
    .minOfNumeric(1)
    .minOfSpecialCharacters(1)
    .noWhiteSpaces(),
  confirmPassword: joi.ref("password"),
};

export const teamNameSchema = {
  teamName: joi.string().max(20),
};
