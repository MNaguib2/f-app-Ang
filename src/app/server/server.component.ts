import { Component } from '@angular/core';

@Component({
    //selector: '[app-server]', //way to reneder one
    //selector: '.app-server', // this is way two render two as a class = 
    selector: 'app-server',
    templateUrl: './server.component.html',
    //styleUrls: ['./server.component.scss'] we have another exist way
    styles: [`
        h1 {
          color: blue;
        }
    `]
})
export class ServerComponent {
    id: number = 10;
    status: string = 'offline';
    allowNewServer = false;
    serverCreationStatus = 'No server was created!';
    click = false;
    serverName ='';

    constructor(){
      setTimeout(() => {
        this.allowNewServer = true;
      }, 2000);
    }
   oncreateserver (){
      if(!this.click){
    this.serverCreationStatus = 'Service was create ' + this.serverName;
    this.click = true;
      }else {
        this.serverCreationStatus = 'No server was created!';
        this.click = false;
      }
    }
    onUpdateServerName(event: Event) {
      this.serverName = (<HTMLInputElement>event.target).value;
    }
  }
  
  