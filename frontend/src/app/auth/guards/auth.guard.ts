import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const userService: UserService = inject(UserService);
  if (userService.getUser().token) {
    return true;
  }
  router.navigate(['login'], { queryParams: { returnUrl: state.url } });
  return false;
};
