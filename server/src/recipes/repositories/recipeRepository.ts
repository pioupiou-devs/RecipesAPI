import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { RecipeWithIngredients, RecipeWithIngredientsWithoutId } from '../types';

const prisma = new PrismaClient();

export class RecipeRepository {
    // Create a new recipe
    public async createRecipe({ name, ingredient }: RecipeWithIngredientsWithoutId): Promise<RecipeWithIngredients> {
        const newRecipe = await prisma.recipe.create({
            data: {
                name,
                ingredient: {
                    create: ingredient
                }
            },
            include: {
                ingredient: true
            }
        });

        return newRecipe;
    }

    // Get all recipes
    async getRecipes(req: Request<RecipeWithIngredients>, res: Response) {
        const recipes = await prisma.recipe.findMany({
            include: {
                ingredient: true
            }
        });
        res.json(recipes);
    }

    // Get a single recipe
    async getRecipe(req: Request<RecipeWithIngredients>, res: Response) {
        const { id } : {id : number} = req.params;
        const recipe = await prisma.recipe.findUnique({
            where: {
                id: id
            },
            include: {
                ingredient: true
            }
        });
        res.json(recipe);
    }

    // Update a recipe
    async updateRecipe(req: Request<RecipeWithIngredients>, res: Response) {
        const { id } = req.params;
        const { name, ingredients } = req.body;
        const updatedRecipe = await prisma.recipe.update({
            where: {
                id: id
            },
            data: {
                name,
                ingredient: {
                    deleteMany: {},
                    create: ingredients
                }
            }
        });
        res.json(updatedRecipe);
    }

    // Partially update a recipe
    // TODO : Implement this function
    async partiallyUpdateRecipe(req: Request<RecipeWithIngredients>, res: Response) {
        const { id } = req.params;
        const { name, ingredients } = req.body;
        const updatedRecipe = await prisma.recipe.update({
            where: {
                id: id
            },
            data: {
                name,
                //ingredients
            }
        });
        res.json(updatedRecipe);
    }

    // Delete a recipe
    async deleteRecipe(req: Request<RecipeWithIngredients>, res: Response) {
        const { id } = req.params;
        const deletedRecipe = await prisma.recipe.delete({
            where: {
                id: id
            }
        });
        res.json(deletedRecipe);
    }

    // Cook a recipe, consuming corresponding ingredients in the process
    async cookRecipe(req: Request<RecipeWithIngredients>, res: Response) {
        const { id } = req.params;
        const cookedRecipe = await prisma.recipe.findUnique({
            where: {
                id: id
            },
            include: {
                ingredient: true
            }
        });

        // TODO update ingredients quantity once recipe is cooked
        // await prisma.ingredient.update({
        //     where: {
        //         id: cookedRecipe.ingredients.qty
        //     }
        // });

        res.json(cookedRecipe);
    }
}