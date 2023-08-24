import * as Joi from 'joi';

export const JoiValidationShema = Joi.object({
  MONGODB: Joi.required(),
});
