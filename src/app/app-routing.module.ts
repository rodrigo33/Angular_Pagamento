import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalComponent } from './modal/modal.component';



const routes: Routes = [
  {path:"usuarios", component: UsuariosComponent},
  {path:"modal", component: ModalComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
