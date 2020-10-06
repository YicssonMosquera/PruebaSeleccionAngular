import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlquilerService } from '../../services/alquiler/alquiler.service'
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
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
  

constructor(private alquilerservice: AlquilerService) { }

 
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
        console.log(this.juegos)
      })
    } catch (err) {
      console.log('no se cargaron datos')
    }
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
