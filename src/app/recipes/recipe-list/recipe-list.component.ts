import { Component,OnInit } from '@angular/core';

import { Recipe } from '../recipe.modal'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test Tittle', 'This os simply a test','https://img.freepik.com/free-vector/illustration-circle-stamp-banner-vector_53876-27183.jpg?size=626&ext=jpg&ga=GA1.1.1830144858.1700745196&semt=ais'),
    new Recipe('A test Tittle', 'This os simply a test','https://img.freepik.com/free-vector/illustration-circle-stamp-banner-vector_53876-27183.jpg?size=626&ext=jpg&ga=GA1.1.1830144858.1700745196&semt=ais'),
  ]
  constructor(){

  }
  ngOnInit(): void {
    
  }
}
