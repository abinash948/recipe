import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [];

  constructor() {
      this.ingredients.push(new Ingredient('Apples',5));
      this.ingredients.push(new Ingredient('Mangoes',10));
   }
  
   getIngredients(){
     return this.ingredients.slice();
   }

   addIngredient(ingredient: Ingredient){
     this.ingredients.push(ingredient);
     this.ingredientsChanged.emit(this.ingredients.slice());
   }

   addIngredients(ingredients: Ingredient[]){
    //  for(let ingredient of ingredients){
    //    this.addIngredient(ingredient);
    //  }
   
   this.ingredients.push(...ingredients);// converting array of elements to list of elements
   this.ingredientsChanged.emit(this.ingredients.slice());
  }
}