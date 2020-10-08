import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import Swal from 'sweetalert2';
import { ClientesService } from '../../services/clientes/clientes.service'
import { Router, NavigationEnd } from '@angular/router'
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JuegosComponent } from '../juegos/juegos.component'
import { DataTableDirective } from 'angular-datatables';
import { Subject, Observable, interval, from } from 'rxjs';
import { AlquilerService } from 'src/app/services/alquiler/alquiler.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import {Alquiler} from '../../models/alquiler'
import {Detallealquiler} from '../../models/detallealquiler'


@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.css']
})
export class AlquilerComponent implements OnDestroy, OnInit {
  cliente
  encontro
  Juegonuevo = []
  isReadonly = true;
  Total = 0
  Subtotal = 0
  Iva = 0
  Totalproducto = 0
  Subtotalproducto = 0
  Ivaproducto = 0
  Fecha_entrega: NgbDateStruct
  Fecha_alquiler:  NgbDateStruct
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  dtElement: DataTableDirective;

  @Input() Juegolocal;
  juegos$: Observable<any[]>;
  Codigo

  Alquiler:Alquiler = {
    PKId: 0,
    FKIdentificacion_TblClientes: '',
    Fecha_Generacion:''
  }
  Detallealquiler:Detallealquiler ={
    PKId: 0,
    FKId_TblAlquiler: 0,
    FKid_TblJuegos: 0,
    Precio: 0,
    Fecha_Alquiler:'',
    Fecha_Fin_alquiler:'',
    Subtotal:0,
    Iva :0,
    Total:0
  }

  constructor(private clienteservice: ClientesService, private Router: Router,
    private modalService: NgbModal, private alquilerservice: AlquilerService)
     {this.Router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
     },
      this.Router.events.subscribe((evt) => {
    if (evt instanceof NavigationEnd) {
        this.Router.navigated = false;
        window.scrollTo(0, 0);
    }
  }); }

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
      this.dtTrigger.next();
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
        this.Cargarclientealquiler();
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
    const modal = this.modalService.open(JuegosComponent, { size: 'xl' })
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
      total = total + subtotal + ivatotal
      console.log(this.Subtotalproducto)
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

  GuardarAlquiler(){
    try{
      delete this.Alquiler.PKId;
      delete this.Alquiler.Fecha_Generacion;
      this.encontro.forEach(element => {
        this.Alquiler.FKIdentificacion_TblClientes = element.PKIdentificacion
      });
      this.alquilerservice.GuardarAlquiler(this.Alquiler).subscribe(res=>{
        console.log(res)
        this.Cargarclientealquiler()
      })

    }catch(err){
      console.log('no se puedieron almacenar datos')
    }
  }

  GuardarDetallealquiler(){
    let iva = 19 /100
    
    try{
      delete this.Detallealquiler.PKId;
      this.Codigo.forEach(element => {
        this.Detallealquiler.FKId_TblAlquiler = element.PKId ;
      });
     
      this.Juegonuevo.forEach(element2 => {
        console.log(this.Juegonuevo)
      this.Detallealquiler.FKid_TblJuegos = element2.PKid;
      this.Detallealquiler.Precio = element2.Precio
     
      this.Detallealquiler.Fecha_Alquiler = this.Fecha_alquiler.year + "-" + this.Fecha_alquiler.month + "-" + this.Fecha_alquiler.day
      this.Detallealquiler.Fecha_Fin_alquiler = this.Fecha_entrega.year + "-" + this.Fecha_entrega.month + "-" + this.Fecha_entrega.day
      const subtotal = (element2.Precio) * (element2.Cantidad)
      const Iva = (element2.Precio) * (element2.Cantidad) * iva
      const Total = subtotal + Iva
      this.Detallealquiler.Subtotal = subtotal
      this.Detallealquiler.Iva = Iva
      this.Detallealquiler.Total = Total
      this.alquilerservice.Guardardetallealquiler(this.Detallealquiler).subscribe(res=>{
        console.log(res)
        Swal.fire({
          title: 'Almacenado!',
          text: 'Registro almacenado con exito',
          icon: 'success',
          allowOutsideClick: false
        }

        ).then((result) => {
          if (result.value) {
            window.location.reload()
          }
        })
      })
    })
    }catch(err){
      console.log('no se pudieron almacenar los datos')
    }
  }


  Cargarclientealquiler(){
    console.log(this.encontro)
    try{
      this.encontro.forEach(element => {
        this.clienteservice.Cargarcodigocliente(element.PKIdentificacion).subscribe(res=>{
          this.Codigo = res
          console.log(this.Codigo)
          this.GuardarDetallealquiler()
        })
      });
     
    }catch(err){
      console.log('No se encontro el codigo')
    }
   
  }

  handleModalsignUpClose() {
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }



}
