import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Array<string> = [
    'Chicken Parmigiana',
    'Prawn Cocktail',
    'Oysters Kilpatrick',
    'Lasagna',
    'Garlic & Soy Chicken Breast'
  ];

  @Output() recipeSelectedEvent = new EventEmitter<string>();

  onRecipeSelected(recipe: string): void {
    this.recipeSelectedEvent.emit(recipe);
  }
}