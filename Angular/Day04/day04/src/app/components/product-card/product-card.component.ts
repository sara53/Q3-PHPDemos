import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent implements OnInit, OnDestroy, OnChanges {
  numberOfProducts: number = 0;
  previousValue: string = '';
  @Input() myProduct: any;

  @Output() OnRemoveProduct = new EventEmitter();
  constructor() {
    console.log('1-ctor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.previousValue = changes['myProduct'].previousValue?.['name'];
  }
  ngOnDestroy(): void {
    console.log('Fired on Destroy');
  }
  ngOnInit(): void {
    console.log('3-Oninit');
  }
  @Output() onAddProduct = new EventEmitter();
  addToCart() {
    this.numberOfProducts++;
    this.onAddProduct.emit(this.numberOfProducts);
  }
  removeProduct(productId: any) {
    this.OnRemoveProduct.emit(productId);
  }
}
