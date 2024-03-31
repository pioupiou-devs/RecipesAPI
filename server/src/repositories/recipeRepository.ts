import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { RecipeWithIngredients, RecipeWithIngredientsWithoutId } from '../types';

const prisma = new PrismaClient();

export class RecipeRepository{
    // Create a new recipe
    public async createRecipe({ name, ingredients }: RecipeWithIngredientsWithoutId) : Promise<RecipeWithIngredients>
    {
        const newRecipe = await prisma.recipe.create({
            data: {
                name,
                ingredients: {
                    create: ingredients
                }
            },
            include: {
                ingredients: true
            }
        });

        return newRecipe;
    }

    // Get all recipes
    async getRecipes(req: Request<RecipeWithIngredients>, res: Response) {
        const recipes = await prisma.recipe.findMany({
            include: {
                ingredients: true
            }
        });
        res.json(recipes);
    }

    // Get a single recipe
    async getRecipe(req: Request<RecipeWithIngredients>, res: Response) {
        const { id } = req.params;
        const recipe = await prisma.recipe.findUnique({
            where: {
                id: id
            },
            include: {
                ingredients: true
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
                ingredients: {
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
                ingredients
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
}