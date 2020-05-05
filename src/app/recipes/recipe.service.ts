import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  

  private  recipes : Recipe[]  = [
  new Recipe(
      'Chicken Biryani',
      'Just the best',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
      [
        new Ingredient('Meat',1),
        new Ingredient('Rice',1)
      ]),
  new Recipe(
      'Kadhai Chicken',
      'Best of Best',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      [
        new Ingredient('Chicken',1),
        new Ingredient('Masala',2.5)
      ])
    ];
  constructor(private slService: ShoppingListService){
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}