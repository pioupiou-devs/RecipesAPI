// @ts-nocheck
import Joi from 'joi';
import { RecipeIngredientUncheckedCreateNestedManyWithoutReciepRelationInputSchemaObject } from './RecipeIngredientUncheckedCreateNestedManyWithoutReciepRelationInput.schema'

export const RecipeUncheckedCreateInputSchemaObject = {
    id: Joi.number(),
  name: Joi.string().required(),
  ingredient: Joi.object().keys(RecipeIngredientUncheckedCreateNestedManyWithoutReciepRelationInputSchemaObject)
}