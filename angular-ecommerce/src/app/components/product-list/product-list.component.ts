import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  currentCategoryId: number = 1;
  previousCategoryId: number = 1;
  currentCategoryName: string;
  searchMode: boolean = false;

  //Pagaination Properties
  pageNumber: number = 1;
  pageSize: number = 2;
  totalElements; number = 0;

  previousKeyword: string = null;



  constructor(private productService: ProductService,
              private cartService: CartService,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {

    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchProduct();
    }
    else
      this.handleProductList();

  }
  handleSearchProduct() {

    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

    if (this.previousKeyword != theKeyword) {
      this.pageNumber=1;
    }

    this.previousKeyword= theKeyword;
  
    this.productService.searchProductPagination(this.pageNumber-1,
                                                this.pageSize,
                                                theKeyword).subscribe(this.processResult());
                                                                                                             
  }

  handleProductList() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');

      this.currentCategoryName = this.route.snapshot.paramMap.get('name');
      console.log(this.currentCategoryName);
    }

    else {
      this.currentCategoryId = 1;
      this.currentCategoryName = 'Birthday';
    }

    if (this.previousCategoryId != this.currentCategoryId) {
      this.pageNumber = 1;
    }

    this.previousCategoryId = this.currentCategoryId;

    this.productService.getProductPagination(this.pageNumber - 1,
      this.pageSize,
      this.currentCategoryId).subscribe(this.processResult());
  }
  processResult() {
    return data => {
      this.products = data._embedded.products;
      this.pageNumber = data.page.number + 1;
      this.pageSize = data.page.size;
      this.totalElements = data.page.totalElements;
    }
  }

  updatePageSize(changedpageSize: number) {
    this.pageSize = changedpageSize;
    this.pageNumber = 1;
    this.listProducts();
  }

  addToCart(theProduct: Product )
  {
    console.log(`Adding to cart: ${theProduct.name},${theProduct.unitPrice}`);
  
      const theCartItem= new CartItem(theProduct);
      this.cartService.addToCart(theCartItem);
  }
}
