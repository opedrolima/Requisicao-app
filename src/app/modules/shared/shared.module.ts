import { NgModule } from '@angular/core';
import { ComumModule } from '../comum.module';  // caminho relativo ao ComumModule
import { FilterDepartamentoPipe } from 'src/app/pipes/filter-departamento.pipe';

@NgModule({
  declarations: [
    FilterDepartamentoPipe
  ],
  imports: [
    ComumModule
  ],
  exports: [
    FilterDepartamentoPipe,
    ComumModule  // para facilitar o uso do ComumModule junto
  ]
})
export class SharedModule { }
