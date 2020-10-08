import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { ReportesService } from 'src/app/services/reportes/reportes.service';

@Component({
  selector: 'app-cliente-frecuente',
  templateUrl: './cliente-frecuente.component.html',
  styleUrls: ['./cliente-frecuente.component.css']
})
export class ClienteFrecuenteComponent implements OnDestroy, OnInit {
  clientes
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  dtElement: DataTableDirective;
  constructor(private reportesservices: ReportesService) { }

  ngOnInit(): void {
    this.dtoptiontables();
    this.Consultarclientesfrecuentes()
  }
  dtoptiontables() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      "lengthChange": false,
      processing: false,
    }
  }

  Consultarclientesfrecuentes() {
    try {
      this.reportesservices.Clientefrecuente().subscribe(res => {
        this.clientes = res
        this.dtTrigger.next
        console.log(this.clientes)
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
