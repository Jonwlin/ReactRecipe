
export interface RecipesJson {
    name: string;
    version: number;
    lastUpdated: string;
    recipes: Recipe[];
}

export interface Recipe {  
    name: string;
    description: string;
    ingredients: {
        amount: number,
        measurement: string,
        item: string
    },
    instructions: {
        1: string
    }
}