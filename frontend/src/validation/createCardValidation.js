import Joi from "joi";
import validation from "./validation";

const loginSchema = Joi.object({
    title: Joi.string()
        .min(2)
        .max(256)
        .required(),
    subtitle: Joi.string()
        .min(2)
        .max(256)
        .required(),
    description: Joi.string()
        .min(2)
        .max(1024)
        .required(),
    phone: Joi.string()
        .pattern(/^((\+972|0)([23489]|5[02468]|77)[1-9]\d{6})$/)
        .min(9)
        .max(11)
        .required(),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
        .required()
        .messages({
            "string.email": "היי, צריך לרשום מייל כמו שמייל אמור להיות כתוב.",
        }),
    url: Joi.string()
        .min(14)
        .required(),
    alt: Joi.string()
        .min(2)
        .max(256)
        .required(),
    state: Joi.string()
        .optional(),
    country: Joi.string()
        .required(),
    city: Joi.string()
        .required(),
    street: Joi.string()
        .required(),
    houseNumber: Joi.number()
        .integer()
        .min(1)
        .required(),
    zip: Joi.number()
        .required(),
});

const validateCreateCard = (inputToCheck) => validation(loginSchema, inputToCheck);
export { validateCreateCard };
