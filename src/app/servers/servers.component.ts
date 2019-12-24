import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created!"
  serverName: string = 'Test Server';
  serverCreated:boolean=false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(): void {
    this.serverCreationStatus = "Server was created! name is " + this.serverName;
    this.serverCreated=true;
  }

  onUpdateServerName(e: Event): void {

    // explicit casting
    this.serverName = (<HTMLInputElement>e.target).value;
    
  }
}
