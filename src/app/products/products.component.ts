import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    trigger('productsAnim', [
      state('active', style({
        opacity:1
      })),
      transition('void => *', [
        style({transform: 'translateX(-30px)', opacity: '0'}),
        animate('700ms ease-in-out')
      ]),
      transition('* => void', [
        animate('300ms ease-in-out', style({transform: 'translateX(-30px)', opacity:'0'}))
      ])
    ])
  ]
})
export class ProductsComponent {

    products = [
      { "title": "USB Car Charger", "description": "My description here"},
      { "title": "Apple Smart Watch", "description": "Latest iOS, Comfortable and Stylish"}
    ];
    state = 'active';
    title: string = '';
    description: string = '';

    addProduct(value:any){
      this.products.push({'title':value.title, 'description': value.description});
      this.title = '';
      this.description = '';
    }

    removeProduct(product){
      this.products.splice(product,1);
    }

}
