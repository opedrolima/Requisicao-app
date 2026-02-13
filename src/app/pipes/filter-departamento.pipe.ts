import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDepartamento'
})
export class FilterDepartamentoPipe implements PipeTransform {

  transform(value: any, filtro: any): any {
    if (filtro == 'TODOSS') return value;
    if(value){
      return value.filter(elem => (elem.departamento.nome === filtro))
    }
    
  }

}
