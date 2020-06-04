import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css'],
  animations: [

    trigger('gatilloC', [
      // ...
      state('mostrar', style({

     opacity: 1

      })),
      state('noMostrar', style({

        opacity: 0

      })),
      transition('mostrar => noMostrar', [
        animate('0.2s')
      ]),
      transition('noMostrar => mostrar', [
        
        animate('0.3s 0.5s')
      ]),
    ]),
    trigger('header', [
      // ...
      state('sinOpacidad', style({


        opacity: 0.5,

      })),
      state('conOpacidad', style({


        opacity: 1,

      })),
      transition('sinOpacidad => conOpacidad', [
        animate('0.75s')
      ]),
      transition('conOpacidad => sinOpacidad', [
        animate('0.75s')
      ]),
    ]),
  ]
})
export class ActividadesComponent implements OnInit {

  c1 = true; // True indica que esta cerrado, chiquito.
  c2 = false;
  c3 = false;
  c4 = true;

  constructor() { }

  ngOnInit(): void {
  }
  

  c1Click = () => {
    if(this.c1){
      this.c1 = false;
      this.c2 = true;
    }
    
  }

  c2Click = () => {
    if(this.c2){
      this.c2 = false;
      this.c1 = true;
    }
  }

  c3Click = () => {
    if(this.c3){
      this.c3 = false;
      this.c4 = true;
    }
    
  }
  c4Click = () => {
    if(this.c4){
      this.c4 = false;
      this.c3 = true;
    }
    
  }

}
