import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product= new Product();
  constructor(private productService: ProductService,
              private cartService: CartService,
              private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(()=>
    {
      this.handleProductDetails();
    })
  }
  handleProductDetails() {
    
    const ProductId: number = +this.router.snapshot.paramMap.get('id');
    
    this.productService.getProduct(ProductId).subscribe(
      data=>{
        this.product=data;
      }
    )
  }
  addToCart()
  {

    const theCartItem = new CartItem(this.product);

    this.cartService.addToCart(theCartItem);
  }
}
