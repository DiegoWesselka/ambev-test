import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';

import { AppComponent } from './app.component';
import { CaixaComponent } from './caixa/caixa.component';
import { ComandaComponent } from './caixa/comanda/comanda.component';
import { AppRoutingModule } from './app-routing-module';
import { MenuComponent } from './menu/menu.component';
import { PagamentoComponent } from './caixa/pagamento/pagamento.component';
import { CustomMaterialModule } from './core/material.module'
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    CaixaComponent,
    ComandaComponent,
    MenuComponent,
    HeaderComponent,
    PagamentoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    CustomMaterialModule,
    MatMenuModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
