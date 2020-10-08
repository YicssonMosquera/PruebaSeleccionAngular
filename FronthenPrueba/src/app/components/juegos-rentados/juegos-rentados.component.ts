import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { ReportesService } from 'src/app/services/reportes/reportes.service';

@Component({
  selector: 'app-juegos-rentados',
  templateUrl: './juegos-rentados.component.html',
  styleUrls: ['./juegos-rentados.component.css']
})
export class JuegosRentadosComponent implements OnDestroy, OnInit {
  Juegos
  seleccionar
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  dtElement: DataTableDirective;
  constructor(private reportesservices: ReportesService) { }

  ngOnInit(): void {
    this.dtoptiontables();
    this.consultarbalance
  }
  dtoptiontables() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      "lengthChange": false,
      processing: false,
    }
  }


  consultarbalance() {
    try {
      this.reportesservices.Consultarbalanceporcliente(this.seleccionar).subscribe(res => {
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
