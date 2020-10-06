import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ClientesService } from '../../services/clientes/clientes.service'
import { Router } from '@angular/router'
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {JuegosComponent} from '../juegos/juegos.component'

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.css']
})
export class AlquilerComponent implements OnInit {
  cliente
  encontro
  constructor(private clienteservice: ClientesService, private Router: Router,
    private modalService: NgbModal ) { }

  ngOnInit(): void {
    this.Mensaje();
  }

  Mensaje() {
    Swal.fire({
      title: 'Para este servicio usted debe estar registrado en nuestra plataforma, por favor consultar con su numero de identificacion.',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
  Consultarcliente() {
    try {
      this.clienteservice.GetClientes(this.cliente).subscribe(res => {
        this.encontro = res
        console.log(this.encontro)
        if (this.encontro.length == 0) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Usted no se encuentra registrado en nuestra plataforma, por favor registrese',
          }).then((result) => {
            if (result.value) {
              this.Router.navigate(['/Registro'])
            }
          })
        }
      })
    } catch (err) {
      console.log('El cliente no se encuentra registrado')
    }
  }

  consultarJuegos() {
    const modal = this.modalService.open(JuegosComponent, { size: 'lg' })
    modal.result.then(
      this.handleModalsignUpClose.bind(this),
      this.handleModalsignUpClose.bind(this)
    )
  }
  handleModalsignUpClose() {
  }

}
