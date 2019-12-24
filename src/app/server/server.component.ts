import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: number = 10;
  serverStatus: string;

  constructor() {
    this.serverStatus = Math.random() < 0.5 ? "offline" : "online";
  }

  ngOnInit() {


  }

  getServerId(): number {
    return this.serverId;
  }

  getColor():string{
    return this.serverStatus==="online"?"green":"red";
  }

}
