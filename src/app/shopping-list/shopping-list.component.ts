import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

   ingredients: Ingredient[] = [];

  constructor() {
      this.ingredients.push(new Ingredient('Apples',5));
      this.ingredients.push(new Ingredient('Mangoes',10));
   }

  ngOnInit(): void {
  }

}
