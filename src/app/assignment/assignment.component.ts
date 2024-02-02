import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.css',
})
export class AssignmentComponent {
  showSecret = false;

  log= [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);

  }
}
