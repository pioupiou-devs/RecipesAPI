import Joi from 'joi';
import { RecipeIngredientWhereUniqueInputSchemaObject } from './objects'

export const RecipeIngredientDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(RecipeIngredientWhereUniqueInputSchemaObject)  }).required()