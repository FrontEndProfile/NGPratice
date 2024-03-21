import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  numbers = [1,2,3,4,5,6,7,8,9];
  onlyOdd = false;


  oddNumber = [1,3,5,7,9];
  evenNumber = [2,4,6,8];

}
