import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm!: FormGroup;
 private foodService: FoodService = inject(FoodService);
private  userService:UserService = inject(UserService)
toastrService = inject(ToastrService);
route: Router = inject(Router);
  constructor() {
    this.foodService.hideHeader()
  }

  ngOnInit() {
    this.registerForm = new FormGroup(
      {
        name: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
      },
      { validators: this.passwordMatchingValidator }
    );
  }
  passwordMatchingValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    password?.value === confirmPassword?.value
      ? null
      : confirmPassword?.setErrors({ notmatched: true });
    return null;
  };

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onRegister() {
    this.userService.register(this.registerForm.value).subscribe(_=>{
      this.route.navigate(['/login'])
    })
  }
}
