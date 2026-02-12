import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Departamento } from 'src/app/models/departamento.model';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {
  departamentos$: Observable<Departamento[]>;
  edit: boolean;
  displayDialogDepartamento: boolean;
  form: FormGroup;
  constructor(private departamentoService: DepartamentoService,private fb: FormBuilder) { }

  ngOnInit() {
    
    this.departamentos$ = this.departamentoService.list();
    this.configForm();

  }

  configForm(){
    this.form = this.fb.group({
      id: new FormControl(),
      nome: new FormControl('',Validators.required),
      telefone: new FormControl('')

    })
  }

  add(){
    this.form.reset();
    this.edit = false;
    this.displayDialogDepartamento = true;
  }

  selecionaDepartamento(depto: Departamento){
this.edit = true;
this.displayDialogDepartamento = true;
this.form.setValue(depto);

  }



}
