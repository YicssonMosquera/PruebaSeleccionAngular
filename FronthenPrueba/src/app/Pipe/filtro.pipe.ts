import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

 
  transform(value: any, args: String): any {
    if (!value) return null
    if (!args) return value
    const resultadojuegos = []
    for (const Juegos of value) {
      if ((Juegos.Protagonistas.toLowerCase().indexOf(args.toLowerCase()) > -1)|| (Juegos.Director.toLowerCase().indexOf(args.toLowerCase()) > -1) || (Juegos.Productor.toLowerCase().indexOf(args.toLowerCase()) > -1) || (Juegos.Marca.toLowerCase().indexOf(args.toLowerCase())) > -1) {
        resultadojuegos.push(Juegos);
        
      }
    }

    return resultadojuegos;

  }

}
