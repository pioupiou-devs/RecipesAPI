// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema.js'

export const IngredientSumOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  season: SortOrderSchema
}