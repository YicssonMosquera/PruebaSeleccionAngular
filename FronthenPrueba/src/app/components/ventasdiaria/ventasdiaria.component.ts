import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { ReportesService } from 'src/app/services/reportes/reportes.service';

@Component({
  selector: 'app-ventasdiaria',
  templateUrl: './ventasdiaria.component.html',
  styleUrls: ['./ventasdiaria.component.css']
})
export class VentasdiariaComponent implements OnDestroy, OnInit {

  Ventas
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  dtElement: DataTableDirective;
  constructor(private reportesservices: ReportesService) { }

  ngOnInit(): void {
    this.dtoptiontables();
    this.ConscultarVentasdiarias();
  }

  dtoptiontables() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      "lengthChange": false,
      processing: false,
    }
  }

  ConscultarVentasdiarias() {
    try {
      this.reportesservices.GetVentasdiarias().subscribe(res => {
        this.Ventas = res
        this.dtTrigger.next
        console.log(this.Ventas)
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
