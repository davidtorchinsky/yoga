import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ContactoService } from "./contacto.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-contacto",
  templateUrl: "./contacto.component.html",
  styleUrls: ["./contacto.component.css"],
})
export class ContactoComponent implements OnInit {
  model: any = {};
  conta: boolean = false;
  ancho: any;

  constructor(private contactoService: ContactoService) {}

  ngOnInit() {
    this.ancho = window.innerWidth;

    if (this.ancho < 416) {
      this.conta = true;
    }
  }

  enviarMail(f: NgForm) {
    console.log(
      "envio un mail  CON " +
        this.model.nombre +
        this.model.nombre +
        this.model.email +
        this.model.asunto
    );
    console.log("llamo al service");
    this.contactoService.enviarMail(
      this.model.nombre,
      this.model.email,
      this.model.asunto,
      this.model.mensaje
    );
    console.log("llame al service");
    Swal.fire({
      title: "¡Muchas Gracias!",
      text: "Se ha enviado un mensaje. Pronto nos contactaremos con vos",
      //type: 'success',
      showConfirmButton: false,
      timer: 3200,
    });

    f.resetForm();
  }
}
