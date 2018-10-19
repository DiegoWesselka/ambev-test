import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaixaComponent } from './caixa/caixa.component';
import { ComandaComponent } from './caixa/comanda/comanda.component';
import { PagamentoComponent } from './caixa/pagamento/pagamento.component';

const routes: Routes = [
  // '/caixa' listar os produtos do Caixa
  {
    path: 'caixa',
    component: CaixaComponent,
  },
  // '/caixa/:id' detalhes do pedido da comanda
  {
    path: 'caixa/comanda/:id',
    component: ComandaComponent
  },
  {
    path: 'caixa/pagamento/:id',
    component: PagamentoComponent
  },
  // '/' to '/list' setando uma rota default
  {
    path: '',
    redirectTo: '/caixa',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
