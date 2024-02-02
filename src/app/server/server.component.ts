import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
  styles : [`
  .online {
    color : #d1e7dd !important;
    text-transform : capitalize;
  }
  
  `]
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';


  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
