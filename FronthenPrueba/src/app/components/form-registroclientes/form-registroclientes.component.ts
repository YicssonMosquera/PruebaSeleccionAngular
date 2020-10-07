import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes/clientes.service'
import { Clientes } from '../../models/clientes'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-form-registroclientes',
  templateUrl: './form-registroclientes.component.html',
  styleUrls: ['./form-registroclientes.component.css']
})
export class FormRegistroclientesComponent implements OnInit {

  clientes
  documento = ''

  Clientes: Clientes = {
    PKIdentificacion: '',
    Nombre_Completo: '',
    Telefono: '',
    Direccion: '',
    Correo: '',
    FKId_TblTipodocumento: '',
    Edad: ''
  }


  constructor(private clienteservice: ClientesService) { }

  ngOnInit(): void {
    this.getTipodocumento();

  }
  getTipodocumento() {
    try {
      this.clienteservice.GetTipodocumento().subscribe(res => {
        this.clientes = res;
      })
    }
    catch (error) {
      console.log('no se pudieron cargar datos')
    }

  }

  GuardarClientes() {
    try {
      console.log(this.documento)
      this.Clientes.FKId_TblTipodocumento = this.documento
      this.clienteservice.GuardarClientes(this.Clientes).subscribe(res => {
        console.log(res)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Cliente registrado con exito',
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
          if (result.value) 
          {window.location.reload()}
        })
      })
    } catch (error) {
      console.log('No se pudo registrar el cliente')
    }
  }
}
