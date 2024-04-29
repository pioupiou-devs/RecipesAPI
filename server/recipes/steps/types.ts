import { Prisma } from "@prisma/client";

// Step with ingredients
const Steps = Prisma.validator<Prisma.StepDefaultArgs>()({
  })


export type Steps = Prisma.StepGetPayload<typeof Steps>;

// ingredients without id
export type StepsWithoutId = Omit<Steps, "id">; 