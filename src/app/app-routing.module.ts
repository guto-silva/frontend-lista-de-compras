import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './componentes/first-page/first-page.component';
import { MinhasListasComponent } from './componentes/minhas-listas/minhas-listas.component';

const routes: Routes = [
  {path: '', component: FirstPageComponent},
  {path: 'minhas-listas', component: MinhasListasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
