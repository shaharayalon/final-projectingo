import Joi from "joi";
import validation from "./validation";

const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "היי, צריך לרשום מייל כמו שמייל אמור להיות כתוב.",
    }),
  password: Joi.string().required().min(2).max(20),
});

const validateLogin = (inputToCheck) => validation(loginSchema, inputToCheck);
export { validateLogin };
