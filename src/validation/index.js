import { joiValidate } from "./joi";
import {
  signUpSchema,
  logInSchema,
  updateUserSchema,
  teamNameSchema,
} from "./joiSchemas";

export const validate = (type, payload) => {
  switch (type) {
    case "signUp":
      // validate signup form
      return joiValidate(signUpSchema, payload);

    case "updateUser":
      /*validate updated user info*/
      return joiValidate(updateUserSchema, payload);

    case "logIn":
      // validate login form
      return joiValidate(logInSchema, payload);

    case "teamName":
      // validate login form
      return joiValidate(teamNameSchema, payload);
    default:
  }
};
