import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './componentes/first-page/first-page.component';
import { MinhasListasComponent } from './componentes/minhas-listas/minhas-listas.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    MinhasListasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
