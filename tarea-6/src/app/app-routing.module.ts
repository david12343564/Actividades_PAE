import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { EducacionComponent } from './pages/educacion/educacion.component';

const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'cursos', component:CursosComponent},
  {path: 'proyectos', component:ProyectosComponent},
  {path: 'educacion', component:EducacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
