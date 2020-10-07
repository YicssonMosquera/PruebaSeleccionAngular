import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import {ClientesService} from '../../services/clientes/clientes.service'

@Component({
  selector: 'app-consultarcliente',
  templateUrl: './consultarcliente.component.html',
  styleUrls: ['./consultarcliente.component.css']
})
export class ConsultarclienteComponent implements OnDestroy, OnInit {

  clientes
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  dtElement: DataTableDirective;
  constructor(private Clienteservice:ClientesService) { }

  ngOnInit(): void {
    this.dtoptiontables();
    this.Cargarclientes();
  }
  dtoptiontables(){
    this.dtOptions = {
      pagingType: 'full_numbers',
     pageLength: 10,
     "lengthChange": true,
      processing: true,
    }
  }
  Cargarclientes(){
    try{
      this.Clienteservice.ConsultarClientegeneral().subscribe(res =>{
        this.clientes = res
        this.dtTrigger.next();
      })
    }catch(err){
      console.log('no se pudieron cargar datos')
    }
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
