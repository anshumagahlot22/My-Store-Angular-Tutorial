import { Component, Input, Output , EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../products';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css',
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify=new EventEmitter(); 
  //@Output() property to raise an event to notify the parent of the change
  

}
