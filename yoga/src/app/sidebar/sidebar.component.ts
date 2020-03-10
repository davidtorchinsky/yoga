import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [

    trigger('gatillo', [
      // ...
      state('abierto', style({

        width: '*',
        opacity: 1,

      })),
      state('cerrado', style({

        width: '0px',
        opacity: 0,
     
      })),
      transition('abierto => cerrado', [
        animate('0.75s')
      ]),
      transition('cerrado => abierto', [
        animate('0.75s')
      ]),
    ]),
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  private sidebar:boolean=false;
  private check=false;

  ngOnInit(): void {

    
  }

  click(){
    this.sidebar=!this.sidebar;
    this.check=!this.check;
    console.log("sidebar "+this.sidebar+" check "+this.check)
  }

}
