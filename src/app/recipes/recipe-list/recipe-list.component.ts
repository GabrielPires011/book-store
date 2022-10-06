import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Teste Recipe', 'This is simply a test', 'https://dansons-site-images.s3.us-west-2.amazonaws.com/pb/recipes/Basic-Smoked-Ribs.png'),
    new Recipe('A Teste Recipe', 'This is simply a test', 'https://dansons-site-images.s3.us-west-2.amazonaws.com/pb/recipes/Basic-Smoked-Ribs.png'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
