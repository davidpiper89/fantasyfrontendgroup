import joi from "joi";
import {
  emailValid,
  emailEmpty,
  userNameLength,
  userNameEmpty,
  passwordEmpty,
  passwordLength,
  passwordUppercase,
  passwordLowercase,
  passwordNumeric,
  passwordSpaces,
  passwordSpecial,
  confirmPasswordMatch,
  // confirmUpdatedPasswordMatch,
  teamNameLength,
} from "./validationErrors";

export const joiValidate = (schema, payload) => {
  const j = joi.object(schema);
  const r = j.validate(payload, { abortEarly: false });
  const errorsMod = {};

  if (r.error) {
    r.error.details.forEach((error) => {
      switch (error.message) {
        case `"email" must be a valid email`:
          errorsMod[error.context.key] = emailValid;
          break;
        case `"email" is not allowed to be empty`:
          errorsMod[error.context.key] = emailEmpty;
          break;
        case `"userName" length must be at least 5 characters long`:
          errorsMod[error.context.key] = userNameLength;
          break;
        case `"userName" is not allowed to be empty`:
          errorsMod[error.context.key] = userNameEmpty;
          break;
        case `"password" is not allowed to be empty`:
          errorsMod[error.context.key] = passwordEmpty;
          break;
        case `"password" length must be at least 8 characters long`:
          errorsMod[error.context.key] = passwordLength;
          break;
        case `"password" should contain at least 1 uppercase character`:
          errorsMod[error.context.key] = passwordUppercase;
          break;
        case `"password" should contain at least 1 lowercase character`:
          errorsMod[error.context.key] = passwordLowercase;
          break;
        case `"password" should contain at least 1 numeric character`:
          errorsMod[error.context.key] = passwordNumeric;
          break;
        case `"password" should contain at least 1 special character`:
          errorsMod[error.context.key] = passwordSpecial;
          break;
        case `"password" should not contain white spaces`:
          errorsMod[error.context.key] = passwordSpaces;
          break;
        case `"confirmPassword" must be [ref:password]`:
          errorsMod[error.context.key] = confirmPasswordMatch;
          break;
        case `"teamName" length must be less than or equal to 20 characters long`:
          errorsMod[error.context.key] = teamNameLength;
          break;
        default:
          errorsMod[error.context.key] = error.message;
          break;
      }
    });

    return errorsMod;
  } else {
    return true;
  }
};
