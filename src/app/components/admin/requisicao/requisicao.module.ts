import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequisicaoRoutingModule } from './requisicao-routing.module';

import { RequisicaoComponent } from './requisicao.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RequisicaoComponent],
  imports: [
    CommonModule,
    RequisicaoRoutingModule,
    NgSelectModule,
    DialogModule,ReactiveFormsModule
  ]
})
export class RequisicaoModule { }
