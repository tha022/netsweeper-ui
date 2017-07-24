import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-merchant',
  templateUrl: './add-merchant.component.html',
  styleUrls: ['./add-merchant.component.css'],
})
export class AddMerchantComponent implements OnInit {
  addMerchantForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    // private userService: UserService,
    private router: Router,
  ) { }

 ngOnInit() {
    this.addMerchantForm = this.formBuilder.group({
      merchantName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      adressOne: ['', Validators.required],
      adressTwo: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postal: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required],
      vat: ['', Validators.required],
    });
  }

  onAdd(): void {

      const formData = this.addMerchantForm.value;

      const merchantName = formData.merchantName,
        username = formData.username,
        email = formData.email,
        password = formData.password,
        adressOne = formData.adressOne,
        adressTwo = formData.adresstwo,
        city = formData.city,
        state = formData.state,
        postal = formData.postal,
        country = formData.country,
        phone = formData.phone,
        vat = formData.vat;
      
      const merchant = { 
        merchantName, 
        username, 
        email, 
        password, 
        adressOne, 
        adressTwo, 
        city, 
        state, 
        postal, 
        country, 
        phone, 
        vat, 
      };
      alert(JSON.stringify(merchant));

      // this.userService.login(user).subscribe(_user => {
      //   alert("Congratulations! You are logged in.");
      //   this.router.navigate(['/home']);
      // }, (err) => {
      //   alert(err);
      //   this.router.navigate(['/auth/signup']);
      // });
      
    }
}
