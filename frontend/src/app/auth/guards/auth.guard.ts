import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

/**
 * AuthGuard function to check if the user is logged in.
 * If the user is logged in, it allows the navigation to the requested page.
 * If the user is not logged in, it displays a message and redirects the user to the login page.
 *
 * @param route - The ActivatedRoute snapshot of the current route being navigated to.
 * @param state - The RouterStateSnapshot of the current router state.
 * @returns True if the user is logged in, False otherwise.
 */
export const authGuard: CanActivateFn = (route, state) => {
  // Get the Router and ToastrService injected from the Angular Dependency Injection
  const router: Router = inject(Router);
  const toastr: ToastrService = inject(ToastrService);
  const userService: UserService = inject(UserService);

  // Check if the user is logged in
  if (userService.getUser().token) {
    return true;
  }

  // If not logged in, show a message and redirect to the login page
  toastr.info('Please login to access this page');

  // not logged in so redirect to login page with the return url
  router.navigate(['login'], { queryParams: { returnUrl: state.url } });
  return false;
};
