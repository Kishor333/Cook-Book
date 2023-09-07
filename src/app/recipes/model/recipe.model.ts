import { Ingredient } from "src/app/shared/ingredient.model";

export interface Recipe {
    name: string;
    description:string;
    imgPath:string;
    ingredient:Ingredient[];
}