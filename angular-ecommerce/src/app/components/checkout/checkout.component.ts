import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { provideRoutes, Router } from '@angular/router';
import { Country } from 'src/app/common/country';
import { Order } from 'src/app/common/order';
import { OrderItem } from 'src/app/common/order-item';
import { Purchase } from 'src/app/common/purchase';
import { State } from 'src/app/common/state';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { FlowersFormService } from 'src/app/services/flowers-form.service';
import { FlowersValidators } from 'src/app/validators/flowers-validators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup: FormGroup;

  totalPrice: number= 0;
  totalQuantity: number = 0;
  

  creditCardYears: number[] = [];
  creditCardMonths: number[] = [];

  countries: Country[] = [];
  shippingAddressStates: State[] = [];
  billingAddressStates: State[] = [];
  constructor(private formBuilder: FormBuilder, private FlowersFormService: FlowersFormService,
              private cartService: CartService, private checkoutService: CheckoutService,
              private router: Router ) { }

  ngOnInit(): void {
    this.checkoutFormGroup = this.formBuilder.group(
      {
        customer: this.formBuilder.group(
          {
            firstName: new FormControl('',
                                      [Validators.required, Validators.minLength(2), FlowersValidators.notOnlyWhitespace]),
            lastName:new FormControl('',
                                      [Validators.required, Validators.minLength(2), FlowersValidators.notOnlyWhitespace]),
            email:new FormControl('',
                                  [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
          
          }),

          shippingAddress: this.formBuilder.group({
            street:new FormControl('',
            [Validators.required, FlowersValidators.notOnlyWhitespace]),
            city:new FormControl('',
            [Validators.required, FlowersValidators.notOnlyWhitespace]),
            state:new FormControl('', Validators.required),
            country:new FormControl('', Validators.required),
            zipCode:new FormControl('',
            [Validators.required, FlowersValidators.notOnlyWhitespace])
          }),

          billingAddress: this.formBuilder.group({
            street:new FormControl('',
            [Validators.required, FlowersValidators.notOnlyWhitespace]),
            city:new FormControl('',
            [Validators.required, FlowersValidators.notOnlyWhitespace]),
            state:new FormControl('', Validators.required),
            country:new FormControl('', Validators.required),
            zipCode:new FormControl('',
            [Validators.required, FlowersValidators.notOnlyWhitespace])
          }),

          creditCard: this.formBuilder.group({
            cardType:new FormControl('',
                                     [Validators.required]),
            nameOnCard:new FormControl('',
                                       [Validators.required, Validators.minLength(2), FlowersValidators.notOnlyWhitespace]),
            cardNumber:new FormControl('',
                                       [Validators.required, Validators.pattern('[0-9]{16}')]),
            securityCode:new FormControl('',
                                       [Validators.required, Validators.pattern('[0-9]{3}')]),
            expirationMonth:[''],
            expirationYear:['']
          }),

      });

      
      const startMonth:number = new Date().getMonth()+1;
      
      this.FlowersFormService.getCreditCardMonths(startMonth).subscribe(
        data=>
        {
          this.creditCardMonths=data;
        }
      )

      this.FlowersFormService.getCreditCardYears().subscribe(
        data=>{

          this.creditCardYears=data;
        }
      );

      this.FlowersFormService.getCountries().subscribe(
        data=>{
          this.countries=data;
        }
      )

      this.reviewCartDetails();
  }

  reviewCartDetails() {
    
     this.cartService.totalQuantity.subscribe(
      data=>{
        this.totalQuantity= data
      }
     );

      this.cartService.totalPrice.subscribe(
        data=>{
          this.totalPrice= data
        }
    );
  }

  get firstName() {return this.checkoutFormGroup.get('customer.firstName');}
  get lastName()  {return this.checkoutFormGroup.get('customer.lastName');}
  get email()  {return this.checkoutFormGroup.get('customer.email');}
  
  get shippingAddressStreet()  {return this.checkoutFormGroup.get('shippingAddress.street');}
  get shippingAddressCity()  {return this.checkoutFormGroup.get('shippingAddress.city');}
  get shippingAddressState()  {return this.checkoutFormGroup.get('shippingAddress.state');}
  get shippingAddressCountry()  {return this.checkoutFormGroup.get('shippingAddress.country');}
  get shippingAddressZipCode()  {return this.checkoutFormGroup.get('shippingAddress.zipCode');}
  
  get billingAddressStreet()  {return this.checkoutFormGroup.get('billingAddress.street');}
  get billingAddressCity()  {return this.checkoutFormGroup.get('billingAddress.city');}
  get billingAddressState()  {return this.checkoutFormGroup.get('billingAddress.state');}
  get billingAddressCountry()  {return this.checkoutFormGroup.get('billingAddress.country');}
  get billingAddressZipCode()  {return this.checkoutFormGroup.get('billingAddress.zipCode');}
  
  get creditCardNameOnCard()  {return this.checkoutFormGroup.get('creditCard.nameOnCard')};
  get creditCardType()  {return this.checkoutFormGroup.get('creditCard.cardType')};
  get creditCardNumber()  {return this.checkoutFormGroup.get('creditCard.cardNumber')};
  get creditCardSecurityCode()  {return this.checkoutFormGroup.get('creditCard.securityCode')};
  
  copyShippingToBillingAddress(event)
  {

    if(event.target.checked){
      this.checkoutFormGroup.controls.billingAddress
      .setValue(this.checkoutFormGroup.controls.shippingAddress.value);
    
    
      this.billingAddressStates = this.shippingAddressStates;
    }

    

    else{
      this.checkoutFormGroup.controls.billingAddress.reset();

      this.billingAddressStates=[];
    }
  }


  onSubmit(){
    console.log(this.checkoutFormGroup.get('customer').value)
  
    console.log(this.checkoutFormGroup.get('shippingAddress').value);
    console.log(this.checkoutFormGroup.get('billingAddress').value);
    console.log(this.checkoutFormGroup.get('creditCard').value);
    console.log("The email address is " + this.checkoutFormGroup.get('customer').value.email);
  
    console.log("The shipping address country is " + this.checkoutFormGroup.get('shippingAddress').value.country.name);
    console.log("The shipping address state is " + this.checkoutFormGroup.get('shippingAddress').value.state.name);
  
    if(this.checkoutFormGroup.invalid)
    {
      console.log(this.checkoutFormGroup.status);
      this.checkoutFormGroup.markAllAsTouched();
      return;
    }

      // set up order
      let order = new Order();
      order.totalPrice=this.totalPrice;
      order.totalQuantity=this.totalQuantity;

      //get cart items
      const cartItems = this.cartService.cartItems;

      //create orderItems from cartItems
      let orderItems: OrderItem[] = [];

      for(let i=0; i<cartItems.length;i++)
      {
        orderItems[i] = new OrderItem(cartItems[i]);
      }

      //set up purchase
      let purchase = new Purchase();

      //populate purchase - customer
      purchase.customer = this.checkoutFormGroup.controls['customer'].value;

      //populating purchase - shipping Address
      purchase.shippingAddress = this.checkoutFormGroup.controls['shippingAddress'].value;
      const shippingState: State = JSON.parse(JSON.stringify(purchase.shippingAddress.state));
      const shippingCountry: State = JSON.parse(JSON.stringify(purchase.shippingAddress.country));
      purchase.shippingAddress.state = shippingState.name;
      purchase.shippingAddress.country = shippingCountry.name;

      //populate purchase - billing address
      purchase.billingAddress = this.checkoutFormGroup.controls['billingAddress'].value;
      const billingState: State = JSON.parse(JSON.stringify(purchase.billingAddress.state));
      const billingCountry: State = JSON.parse(JSON.stringify(purchase.billingAddress.country));
      purchase.billingAddress.state = billingState.name;
      purchase.billingAddress.country = billingCountry.name;

      //populate purchase = order and orderItems
      purchase.order = order;
      purchase.orderItems = orderItems;
      console.log('working here');
      //calling restApi
      this.checkoutService.placeOrder(purchase).subscribe(
        {
          next: response =>{
            alert(`Your order has been received.\nOrder tacking number; ${response.orderTrackingNumber}`);
            
            this.resetCart();
          },
          error: err =>{
            alert(`There was an error: ${err.message}`);
          }
        }
      )
  }
  resetCart() {
   //reset cart data
    this.cartService.cartItems = [];
    this.cartService.totalPrice.next(0);
    this.cartService.totalQuantity.next(0);

   //reset form data
   this.checkoutFormGroup.reset();

   this.router.navigateByUrl("/products");
  }

  handleMonthsAndYears(){
    const creditCardFormGroup = this.checkoutFormGroup.get('creditCard');
    
    const currentYear: number = new Date().getFullYear();
    const selectedYear: number = Number(creditCardFormGroup.value.expirationYear);


    let startMonth: number;
    if(currentYear === selectedYear)
    {
      startMonth = new Date().getMonth()+1;
    }

    else {
      startMonth=1;
    }
    
    this.FlowersFormService.getCreditCardMonths(startMonth).subscribe(
      
        data=>{
          this.creditCardMonths= data;
        
      }
    );
  }

  getStates(formGroupName: string)
  {

    const formGroup= this.checkoutFormGroup.get(formGroupName);

    const countryCode= formGroup.value.country.code;

    this.FlowersFormService.getStates(countryCode).subscribe(
      data=>{
        if(formGroupName==='shippingAddress')
        this.shippingAddressStates=data;

       else
        this.billingAddressStates=data;

        formGroup.get('state').setValue(data[0]);
      }

      
    )
  }
}
