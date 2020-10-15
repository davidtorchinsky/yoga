import { Component, OnInit, HostListener } from '@angular/core';
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
    trigger('header', [
      // ...
      state('sinOpacidad', style({


        opacity: 0,

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
export class SidebarComponent implements OnInit {

  constructor() { }

  private sidebar = false;
  private check = false;
  private scroll = false;
  private number = 0;
  private ancho;
  mobile = false;

  ngOnInit(): void {

    this.ancho = window.innerWidth;
    if (this.ancho < 769) {
      this.mobile = true;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    this.number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (this.number <= 150 ) {
        this.scroll = false;

       // this.ruta = 'assets/imagenes/logoChico.png';
      //  console.log(this.hamburguesa)
    }
    if (this.number > 150) {
      this.scroll = true;
      // tslint:disable-next-line:comment-format
     // this.ruta = 'assets/imagenes/logoChico.png'; //Esta ruta esta por si hay que cambiar la imagen del logo al bajar
      // console.log('You are 100px from the top to bottom ' + this.hamburguesa);


    }
   // document.getElementById('navbarSupportedContent').classList.remove('show');
  }

  click() {
    this.sidebar = !this.sidebar;
    this.check = !this.check;
  }

  vacio() {

  }

  mouseEnter() {

    this.scroll = false;
  }
  mouseLeave() {
   if (this.number > 150) {
      this.scroll = true;
   }
  }

}
