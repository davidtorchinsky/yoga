import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css'],
  animations: [

    trigger('clickCuadrado', [
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

}
