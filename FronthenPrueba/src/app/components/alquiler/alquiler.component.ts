import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { ClientesService } from '../../services/clientes/clientes.service'
import { Router } from '@angular/router'
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JuegosComponent } from '../juegos/juegos.component'
import { DataTableDirective } from 'angular-datatables';

import { Subject, Observable } from 'rxjs';
import { AlquilerService } from 'src/app/services/alquiler/alquiler.service';

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.css']
})
export class AlquilerComponent implements OnInit {
  cliente
  encontro
  Juegonuevo = []
  isReadonly = true;

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  dtElement: DataTableDirective;

@Input() Juegolocal;
juegos$: Observable<any[]>;
  
  constructor(private clienteservice: ClientesService, private Router: Router,
    private modalService: NgbModal, private alquilerservice: AlquilerService) { }

  ngOnInit(): void {
    this.Mensaje();
    this.dtoptiontables();
    this.Traerjuegos();
  }

  Traerjuegos(){
    this.juegos$ = this.alquilerservice.getJuegos$()
    this.juegos$.subscribe(Juegolocal =>{
      this.Juegolocal = Juegolocal
      console.log(Juegolocal)
      Array.prototype.push.apply(this.Juegonuevo, this.Juegolocal);
    })
  }

  dtoptiontables(){
    this.dtOptions = {
      pagingType: 'full_numbers',
     pageLength: 10,
     "lengthChange": false,
      processing: false,
    }
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
        this.isReadonly = false;
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
