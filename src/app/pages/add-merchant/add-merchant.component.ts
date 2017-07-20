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
      /*
      let formData = this.addMerchantForm.value;
      let email = formData.email;
      let password = formData.password;
      
      let user = {email, password};

      this.userService.login(user).subscribe(_user => {
        alert("Congratulations! You are logged in.");
        this.router.navigate(['/home']);
      }, (err) => {
        alert(err);
        this.router.navigate(['/auth/signup']);
      });
      */
    }
}
