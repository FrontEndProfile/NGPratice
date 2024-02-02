import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = '';
  ServerCreationsStatus = 'No server was crated !';
  serverCreated = false;

  servers = [ 'sever 1' , 'server 2']


  ngOnInit() {
  }
  constructor(){
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }



  onCreateServer() {
    this.ServerCreationsStatus = "Sever Was Crated! Name is " + this.serverName;
    this.serverCreated =  true;
    this.servers.push(this.serverName);
  }

}
