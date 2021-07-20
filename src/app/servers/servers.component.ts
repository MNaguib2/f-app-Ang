import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  status: string = 'offline';
  id: number = 10;
  showpassword = false;
  log = [] as  any;
  constructor() {
    this.status = Math.random() > .5 ? 'online' : 'offline';
   }

  ngOnInit(): void {
  }
  getColor() {
    return this.status === 'online' ? 'green' :  'red';
  }
  onToggelDetials(){
    this.showpassword = !this.showpassword;
    this.log.push(this.log.length + 1 +'-'+ new Date());
  }
}
