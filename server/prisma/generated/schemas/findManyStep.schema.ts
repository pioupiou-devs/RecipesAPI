import Joi from 'joi';
import { StepWhereInputSchemaObject, StepOrderByWithRelationInputSchemaObject, StepWhereUniqueInputSchemaObject } from './objects/index.js';
import { StepScalarFieldEnumSchema } from './enums/index.js'

export const StepFindManySchema = Joi.object().keys({ where: Joi.object().keys(StepWhereInputSchemaObject), orderBy: Joi.object().keys(StepOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(StepWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(StepScalarFieldEnumSchema)  }).required()