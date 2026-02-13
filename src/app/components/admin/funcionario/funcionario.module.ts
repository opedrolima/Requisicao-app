import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComumModule } from 'src/app/modules/comum.module';
import { NgSelectModule } from '@ng-select/ng-select';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { FuncionarioComponent } from './funcionario.component';


@NgModule({
  declarations: [FuncionarioComponent],
  imports: [
    ComumModule,
    NgSelectModule,
    CommonModule,
    FuncionarioRoutingModule
  ]
})
export class FuncionarioModule { }
