// @ts-nocheck
import Joi from 'joi';
import { NestedStringWithAggregatesFilterSchemaObject } from './NestedStringWithAggregatesFilter.schema.js';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema.js';
import { NestedStringFilterSchemaObject } from './NestedStringFilter.schema.js'

export const StringWithAggregatesFilterSchemaObject = {
    equals: Joi.string(),
  in: Joi.alternatives().try(Joi.array().items(Joi.string()),
Joi.string()),
  notIn: Joi.alternatives().try(Joi.array().items(Joi.string()),
Joi.string()),
  lt: Joi.string(),
  lte: Joi.string(),
  gt: Joi.string(),
  gte: Joi.string(),
  contains: Joi.string(),
  startsWith: Joi.string(),
  endsWith: Joi.string(),
  not: Joi.alternatives().try(Joi.string(),
Joi.object().keys(NestedStringWithAggregatesFilterSchemaObject)),
  _count: Joi.object().keys(NestedIntFilterSchemaObject),
  _min: Joi.object().keys(NestedStringFilterSchemaObject),
  _max: Joi.object().keys(NestedStringFilterSchemaObject)
}