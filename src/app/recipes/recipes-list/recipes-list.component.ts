import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes : Recipe[]  = [];
      
  constructor() {
    this.recipes.push(new Recipe('A test Recipe','This is simply a test','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'));
    this.recipes.push(new Recipe('Another test Recipe','This is simply a test','https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'));
  }

  ngOnInit() {

  }

  onRecipeSelected(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
