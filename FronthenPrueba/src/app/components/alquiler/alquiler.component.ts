import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { ClientesService } from '../../services/clientes/clientes.service'
import { Router } from '@angular/router'
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JuegosComponent } from '../juegos/juegos.component'
import { DataTableDirective } from 'angular-datatables';
import { Subject, Observable, interval } from 'rxjs';
import { AlquilerService } from 'src/app/services/alquiler/alquiler.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

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
  Total = 0
  Subtotal = 0
  Iva = 0
  model: NgbDateStruct
  
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
    this.cargarTotal();
  }

  Traerjuegos() {
    this.juegos$ = this.alquilerservice.getJuegos$()
    this.juegos$.subscribe(Juegolocal => {
      this.Juegolocal = Juegolocal
      console.log(Juegolocal)
      Array.prototype.push.apply(this.Juegonuevo, this.Juegolocal);
    })
  }

  dtoptiontables() {
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

  EliminarJuegos(PKId): void {
    Swal.fire({
      title: 'Desea eliminar este juego?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'aceptar'

    }).then((result) => {
      if (result.value) {
        let index
        for (let i = 0; i < this.Juegonuevo.length; i++) {
          if (this.Juegonuevo[i].PKId === PKId) {
            index = i;
            this.Juegonuevo.splice(index, 1);
            console.log('entro')
          }
        }
      }
    })
  }
  CalcularTotales() {
    var p, c, iva, total = 0, subtotal = 0, ivatotal=0
    for (let i = 0; i < this.Juegonuevo.length; i++) {
      p = this.Juegonuevo[i].Precio
      c = this.Juegonuevo[i].Cantidad
      iva = 19/100
      ivatotal = ivatotal + p * c  * iva
      console.log(ivatotal)
      subtotal = subtotal + p * c
      total = total + p + c + ivatotal
    }
    this.Total = total
    this.Subtotal = subtotal
    this.Iva = ivatotal
  }
  cargarTotal() {
    const cargar = interval(1000);
    cargar.subscribe(() => {
      this.CalcularTotales();
    })
  }


  handleModalsignUpClose() {
  }

}
