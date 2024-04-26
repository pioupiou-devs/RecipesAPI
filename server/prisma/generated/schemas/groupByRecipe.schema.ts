import Joi from 'joi';
import { RecipeWhereInputSchemaObject, RecipeOrderByWithAggregationInputSchemaObject, RecipeScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { RecipeScalarFieldEnumSchema } from './enums'

export const RecipeGroupBySchema = Joi.object().keys({ where: Joi.object().keys(RecipeWhereInputSchemaObject), orderBy: Joi.object().keys(RecipeOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(RecipeScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(RecipeScalarFieldEnumSchema).required()  }).required()