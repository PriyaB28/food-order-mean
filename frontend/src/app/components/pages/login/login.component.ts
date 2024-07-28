import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  foodService: FoodService = inject(FoodService);
  loginForm!: FormGroup;
  returnUrl = '';
  userService = inject(UserService);
  route: Router = inject(Router);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
 

  constructor() {
    this.foodService.isSubpage.next(true);
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.userService.login(this.loginForm.value).pipe(
      catchError((error: any) => {
        // Handle the error here
        console.error('An error occurred:', error);
        // Optionally, re-throw the error or return a default value
        return throwError('Something went wrong');
      })
    ).subscribe(
      (user) => {
       this.route.navigateByUrl(this.returnUrl)
      }
    );
  }

  get email() {
    return this.loginForm.get('email') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }
}
