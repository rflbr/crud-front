import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunoDetailComponent } from './aluno-detail/aluno-detail.component';
import { AlunoService } from './aluno.service' ;


@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    AlunoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
