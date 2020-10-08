import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ReportesService } from 'src/app/services/reportes/reportes.service';

@Component({
  selector: 'app-jmenosrentadosedad',
  templateUrl: './jmenosrentadosedad.component.html',
  styleUrls: ['./jmenosrentadosedad.component.css']
})
export class JmenosrentadosedadComponent implements OnDestroy, OnInit {
  
  Juegos
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  dtElement: DataTableDirective;
  constructor(private reportesservices: ReportesService) { }

  ngOnInit(): void {
    this.dtoptiontables();
    this.consultarjuegosmenosrentadosedad();
  }

  dtoptiontables() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      "lengthChange": false,
      processing: false,
    }
  }
  consultarjuegosmenosrentadosedad() {
    try {
      this.reportesservices.Juegosmenosrentadosporeedad().subscribe(res => {
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
