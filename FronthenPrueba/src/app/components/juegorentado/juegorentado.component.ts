import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/services/reportes/reportes.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-juegorentado',
  templateUrl: './juegorentado.component.html',
  styleUrls: ['./juegorentado.component.css']
})
export class JuegorentadoComponent implements OnInit {

  Juegos
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  dtElement: DataTableDirective;
  constructor(private reportesservices:ReportesService) { }

  ngOnInit(): void {
    this.dtoptiontables();
    this.consultarjuegosrentados()
  }
  dtoptiontables() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      "lengthChange": false,
      processing: false,
    }
  }
  consultarjuegosrentados() {
    try {
      this.reportesservices.Juegorentable().subscribe(res => {
        this.Juegos = res
        this.dtTrigger.next
        console.log(this.Juegos)
      })
    } catch (err) {
      console.log('no se pudieron obtener datos')
    }

  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }


}
