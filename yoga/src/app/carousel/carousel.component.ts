import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
})
export class CarouselComponent implements OnInit {
  movil: boolean = false;
  ancho: number;
  constructor() {}

  ngOnInit(): void {
    this.ancho = window.innerWidth;
    if (this.ancho < 416) {
      this.movil = true;
    }
    if (this.ancho < 813) {
      this.movil = true;
    }
  }
}
