import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlquilerService } from '../../services/alquiler/alquiler.service'
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnDestroy, OnInit {

juegos
dtOptions: DataTables.Settings = {};
dtTrigger = new Subject();
dtElement: DataTableDirective;
Juegos 
Juegolocal =[]

constructor(private alquilerservice: AlquilerService, public activeModal: NgbActiveModal,) { }

 
  ngOnInit(): void {
    this.dtoptiontables();
    this.ConsultarJuegos();
  }

  dtoptiontables(){
    this.dtOptions = {
      pagingType: 'full_numbers',
     pageLength: 10,
     "lengthChange": false,
      processing: false,
    }
  }

  ConsultarJuegos() {
    try {
      this.alquilerservice.CargarJuegos().subscribe(res => {
        this.juegos = res
        this.dtTrigger.next();
      })
    } catch (err) {
      console.log('no se cargaron datos')
    }
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  AgregarJuegos(){
    this.juegos.forEach(element => {
      if(element.Cantidad > 0){
        this.Juegos = element
        this.Juegolocal.push(this.Juegos)
        console.log(this.Juegolocal)
      }
    });
    this.alquilerservice.GETJUEGOS(this.Juegolocal)
    this.activeModal.dismiss('Cross click')
  }
  salir(){
    this.activeModal.dismiss('Cross click')
  }
}
