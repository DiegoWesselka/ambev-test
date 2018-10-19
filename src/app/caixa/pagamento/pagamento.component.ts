import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss']
})
export class PagamentoComponent implements OnInit {
  
  private title = 'Pagamento'
  total:number = 0;
  
  @Input() recebeProdutos
  constructor() { }
  
  ngOnInit() {
    this.totalPrice();
    console.log(this.recebeProdutos, 'se liga');
  }


  totalPrice(){
    this.total = 0;
    for(var i=0;i<this.recebeProdutos.length;i++){
      const subtotal = this.recebeProdutos[i].product_price * this.recebeProdutos[i].product_quality;
      this.total += (subtotal);
      this.recebeProdutos[i].product_subtotal = subtotal;
    }
  }
}
